import React, {FC} from 'react';
import {ICommentModel} from "../../models/ICommentModel";
import styles from "./Comment.module.css"

interface IProps {
    comment: ICommentModel
}

const CommentComponent: FC<IProps> = ({comment}) => {
    return (
        <div className={styles.commentBlock}>
            <span><i>{comment.id} {comment.email} {comment.name}</i></span>
            <span>{comment.body}</span>
        </div>
    );
};

export default CommentComponent;
