import axios, {AxiosResponse} from "axios";
import {IPostModel} from "../models/IPostModel";

let axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {'Content-Type': "application/json"}
});

const getPosts = (): Promise<AxiosResponse<IPostModel[]>> => {
    return axiosInstance.get('/posts');
}

const getPost = (id: number): Promise<AxiosResponse<IPostModel>> => {
    return axiosInstance.get('/posts/' + id);
}

const getPostsOfUser = (userId: number): Promise<AxiosResponse<IPostModel[]>> => {
    return axiosInstance.get('/posts?userId=' + userId);
}

export {
    getPosts,
    getPost,
    getPostsOfUser
};