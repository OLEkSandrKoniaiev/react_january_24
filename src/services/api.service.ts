import axios, { AxiosError } from "axios";
import { baseURL, urls } from "../constants/urls";
import { authService } from "./auth.service";
import { router } from "../router/router";

// Флаг, що вказує на процес рефрешу токена
let isRefreshing = false;

// Тип колбеку для waitList
type IWaitList = () => void;

// Масив колбеків, що очікують завершення рефрешу токена
const waitList: IWaitList[] = [];

// Створення інстансу axios з базовим URL
const apiService = axios.create({ baseURL });

// Interceptor для запитів
apiService.interceptors.request.use(req => {
    // Отримання токена доступу з authService
    const accessToken = authService.getAccessToken();

    // Додавання токена до заголовка запиту, якщо він існує
    if (accessToken) {
        req.headers.Authorization = `Bearer ${accessToken}`;
    }

    return req; // Повернення запиту з доданим заголовком
});

// Interceptor для відповідей
apiService.interceptors.response.use(
    res => {
        return res; // Повернення успішної відповіді
    },
    async (error: AxiosError) => {
        const originalRequest = error.config; // Збереження оригінального запиту

        // Якщо статус відповіді 401 (неавторизовано)
        if (error.response.status === 401) {
            // Якщо зараз не триває процес рефрешу токена
            if (!isRefreshing) {
                isRefreshing = true; // Встановлення флагу процесу рефрешу

                try {
                    await authService.refresh(); // Спроба оновити токен
                    runAfterRefresh(); // Виклик всіх функцій з waitList
                    isRefreshing = false; // Скидання флагу процесу рефрешу

                    // Повторення оригінального запиту з новим токеном
                    return apiService(originalRequest);
                } catch (e) {
                    authService.removeTokens(); // Видалення токенів у разі невдачі
                    isRefreshing = false; // Скидання флагу процесу рефрешу
                    router.navigate('/login?SessionExpired=true'); // Перенаправлення на сторінку логіну
                    return Promise.reject(error); // Відхилення запиту з помилкою
                }
            }

            // Якщо оригінальний запит був на рефреш токену, повертаємо помилку
            if (originalRequest.url === urls.auth.refresh) {
                return Promise.reject(error);
            }

            // Додавання запиту до waitList для повторення після рефрешу
            return new Promise(resolve => {
                subscribeToWaitList(() => {
                    resolve(apiService(originalRequest)); // Повторення запиту після рефрешу
                });
            });
        }

        // Відхилення запиту з іншою помилкою
        return Promise.reject(error);
    }
);

// Додавання колбеку до waitList
const subscribeToWaitList = (callback: IWaitList): void => {
    waitList.push(callback);
};

// Виклик всіх колбеків з waitList
const runAfterRefresh = (): void => {
    while (waitList.length) {
        const callback = waitList.pop();
        callback();
    }
};

// Експорт налаштованого інстансу axios
export {
    apiService
}
