import axios, {AxiosResponse} from "axios";
import {IPostModel} from "../models/IPostModel";
import {IPostsResponceModel} from "../models/responceModels/IPostsResponceModel";

let axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {'Content-Type': "application/json"}
});

const getPosts = (): Promise<AxiosResponse<IPostsResponceModel>> => {
    return axiosInstance.get('/posts');
}

const getPost = (id: number): Promise<AxiosResponse<IPostModel>> => {
    return axiosInstance.get('/posts/' + id);
}

const getPostsOfUser = async (userId: number): Promise<AxiosResponse<IPostsResponceModel>> => {
    return axiosInstance.get('/posts/user/' + userId);
}

export {
    getPosts,
    getPost,
    getPostsOfUser
};