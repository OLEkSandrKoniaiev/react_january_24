import React, {FC} from 'react';
import styles from "../../styles/General.module.css";
import {ICommentModel} from "../../models/ICommentModel";

interface IProps {
    comment: ICommentModel;
}

const CommentComponent: FC<IProps> = ({comment}) => {
    return (
        <div className={styles.marginY10}>
            {comment.id} - PostID: {comment.postId} - {comment.email}
            <br/>
            <b>{comment.name}</b>
            <br/>
            <span className={styles.truncate}>{comment.body}</span>
        </div>
    );
};

export default CommentComponent;
