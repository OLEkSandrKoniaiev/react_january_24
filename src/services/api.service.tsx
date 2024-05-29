import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

let axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {}
})

const userApiService = {
    getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get("/users");
    },
    getPostsOfUser: (userId: string): Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get(`/users/${userId}/posts`);
    }

    //     return axiosInstance.get("/users")
    //         .then(value => {
    //             console.log(value.data);
    //             return value;
    //          })

    //     const value = await axiosInstance.get("/users");
    //     console.log(value.data);
    //     return value;

    // getUserById: async (userId: number):Promise<AxiosResponse<IUserModel>> => {
    //     return await axiosInstance.get(`/users/${userId}`)
    // }
}

const postApiService = {
    getAllPosts: (): Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get("/posts");
    },
    getCommentsOfPost: (postId: string): Promise<AxiosResponse<ICommentModel[]>> => {
        return axiosInstance.get(`/posts/${postId}/comments`);
    }
}

const commentApiService = {
    getAllComments: (): Promise<AxiosResponse<ICommentModel[]>> => {
        return axiosInstance.get("/comments");
    }
}

export {
    userApiService,
    postApiService,
    commentApiService
}
