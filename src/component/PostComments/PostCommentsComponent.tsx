import React, {FC} from 'react';
import {PostWithCommentsType} from "../../models/IPostWithCommentsModel";
import styles from "./PostComments.module.css"

type TypeProps = {
    post: PostWithCommentsType
}

const PostCommentsComponent: FC<TypeProps> = ({post}) => {
    return (
        <div className={styles.postCommentsBlock}>
            <b>{post.id} {post.title}</b>
            {
                post.comments.map(comment =>
                    <div className={styles.commentBlock}>
                        <span><i>{comment.id} {comment.email} {comment.name}</i></span>
                        <span>{comment.body}</span>
                    </div>)
            }
        </div>
    );
};


export default PostCommentsComponent;
