import React, {FC} from 'react';
import {ICommentModel} from "../../models/ICommentModel";
import styles from "../../styles/General.module.css";

interface IProps {
    comment: ICommentModel;
}

const PostCommentComponent: FC<IProps> = ({comment}) => {
    return (
        <div key={comment.id} className={styles.marginY10}>
            {comment.id} - PostID: {comment.postId} - {comment.email}
            <br/>
            <b>{comment.name}</b>
            <br/>
            <span className={styles.truncate}>{comment.body}</span>
        </div>
    );
};

export default PostCommentComponent;
