import {IPostModel} from "./IPostModel";
import {ICommentModel} from "./ICommentModel";

export type PostWithCommentsType = IPostModel & {comments: ICommentModel[]};

export interface IPostWithCommentsModel {
    id: number,
    postId: number,
    email: string,
    name: string,
    body: string
    comments: ICommentModel[]
}
