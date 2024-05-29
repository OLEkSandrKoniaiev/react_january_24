import React, {FC} from 'react';
import CommentComponent from "../Comment/CommentComponent";
import {ICommentModel} from "../../models/ICommentModel";

interface IProps {
    comments: ICommentModel[] | undefined;
}

const CommentsComponent: FC<IProps> = ({comments}) => {
    return (
        <div>
            {comments?.map(comment =>
                <CommentComponent key={comment.id} comment={comment}/>
            )}
        </div>
    );
};

export default CommentsComponent;
