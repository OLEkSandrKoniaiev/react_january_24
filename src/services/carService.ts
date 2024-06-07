import axios, {AxiosError} from "axios";
import {retriveLocalStorageData} from "./utilities/utilities";
import {ITokenObtainPair} from "../models/ITokenObtainPair";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {authService} from "./auth.service";


const axiosInstance = axios.create({
    baseURL: "http://owu.linkpc.net/carsAPI/v2",
    headers: {}
});

axiosInstance.interceptors.request.use(request => {
    if (localStorage.getItem('tokenPair') && (request.url !== '/auth' && request.url !== '/auth/refresh')) {
        const iTokenObtainPair = retriveLocalStorageData<ITokenObtainPair>("tokenPair");
        request.headers.set("Authorization", "Bearer " + iTokenObtainPair.access);
    }

    return request;
});

const carService = {
    getUserCars: async (page?: string): Promise<ICarPaginatedModel | null> => {

        try {
            const response = await axiosInstance.get<ICarPaginatedModel>('/cars', {params: {page: page}});
            return response.data;

        } catch (e) {
            let axiosError = e as AxiosError;
            console.log(axiosError);
            if (axiosError?.response?.status === 401) {
                const refreshToken = retriveLocalStorageData<ITokenObtainPair>('tokenPair').refresh;
                await authService.refresh(refreshToken);
                return await carService.getUserCars(page);
            }
        }

        return null;
    }
}

export {
    carService
}
