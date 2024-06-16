import {IUserModel} from "./IUserModel";
import {IPostModel} from "./IPostModel";

export type UserWithPostsType = IUserModel & {posts: IPostModel[]};

export interface IUserWithPostsModel {
    id: number,
    name: string,
    username: string,
    email: string,
    posts: IPostModel[]
}
