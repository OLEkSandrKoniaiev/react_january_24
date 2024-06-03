import axios from "axios";
import {AuthDataModel} from "../models/AuthDataModel";
import {ITokenObtainPair} from "../models/ITokenObtainPair";

const axiosInstance = axios.create({
    baseURL: "http://owu.linkpc.net/carsAPI/v2",
    headers: {}
});

const authService = {
    authentication: async (authData: AuthDataModel): Promise<boolean> => {
        let response;
        try {
            response = await axiosInstance.post<ITokenObtainPair>('/auth', authData);
            localStorage.setItem('tokenPair', JSON.stringify(response.data));
        } catch (e) {
            console.log(e);
        }


        return !!(response?.data?.access && response?.data?.refresh);
    },
    refresh: () => {

    }
}

export {
    authService
}
