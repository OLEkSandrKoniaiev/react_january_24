import {IUserModel} from "../models/IUserModel";
import axios, {AxiosResponse} from "axios";


let axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {'Content-Type': "application/json"}
});

const getUsers = (): Promise<AxiosResponse<IUserModel[]>> => {
    return axiosInstance.get('/users');
}

const getUser = (id: number): Promise<AxiosResponse<IUserModel>> => {
    return axiosInstance.get('/users/' + id);
}

export {
    getUsers,
    getUser
};

// const baseUrl = 'https://dummyjson.com/users';
//
// const getUsers = (): Promise<IUserModel[]> => {
//     return fetch(baseUrl)
//         .then(value => value.json())
// }
//
// const getUser = (id: number):Promise<IUserModel> => {
//     return fetch(baseUrl + '/' + id)
//         .then(value => value.json())
// }
//
// const getUser = async (id: number):Promise<IUserModel> => {
//     return await fetch(baseUrl + '/' + id)
//         .then(value => value.json())
// }
