import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import styles from "../../styles/Post.module.css";

const PostComponent: FC<IPostModel> = ({id, title, body, tags, reactions}) => {
    return (
        <div className={styles.postBlock}>
            <span>ID: {id}</span>
            <h3>Title: {title}</h3>
            <span className={styles.tag}>Tags: {tags.join(', ')}</span>
            <p>{body}</p>
            <span>Reactions: {reactions}</span>
        </div>
    );
};

export default PostComponent;