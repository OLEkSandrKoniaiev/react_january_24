import React, {FC} from 'react';
import {ICommentModel} from "../../models/ICommentModel";
import PostCommentComponent from "../PostComment/PostCommentComponent";

interface IProps {
    comments: ICommentModel[] | undefined;
}

const PostCommentsComponent: FC<IProps> = ({comments}) => {
    return (
        <div>
            {
                comments?.map(comment => <PostCommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default PostCommentsComponent;
