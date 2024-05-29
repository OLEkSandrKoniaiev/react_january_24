import React, {FC} from 'react';
import CommentComponent from "./CommentComponent";
import {ICommentModel} from "../models/ICommentModel";

interface IProps {
    comments: ICommentModel[] | undefined;
}

const CommentsComponent: FC<IProps> = ({comments}) => {
    return (
        <div>
            {comments?.map(comment =>
                <CommentComponent comment={comment}/>
            )}
        </div>
    );
};

export default CommentsComponent;
