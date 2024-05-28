import axios, {AxiosResponse} from "axios";
import {IFormModel} from "../models/IFormModel";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json; charset=UTF-8'
    }
});

const postPost = async (formValues: IFormModel): Promise<AxiosResponse<IFormModel>> => {
    const response = await axiosInstance.post<IFormModel>("/posts", {
        title: formValues.title,
        body: formValues.body,
        userId: formValues.userId
    });
    console.log(response.data);
    return response;
}

export {
    postPost
}
