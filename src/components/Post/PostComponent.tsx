import React, {FC} from 'react';
import styles from "../../styles/General.module.css";
import {IPostModel} from "../../models/IPostModel";

interface IProps {
    post: IPostModel;
}

const PostComponent: FC<IProps> = ({post}) => {
    return (
        <div className={styles.marginY10}>
            {post.id} - UserID: {post.userId}
            <br/>
            <b>{post.title}</b>
            <br/>
            <span className={styles.truncate}>{post.body}</span>
        </div>
    );
};

export default PostComponent;
