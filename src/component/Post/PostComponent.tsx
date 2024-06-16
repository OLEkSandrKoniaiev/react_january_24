import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import {useStore} from "../../context/ContextProvider";
import styles from "./Post.module.css"

interface IProps {
    post: IPostModel
}

const PostComponent: FC<IProps> = ({post}) => {

    const {postStore: {setFavoritePost}} = useStore();

    return (
        <div className={styles.postBlock}>
            <span><i>{post.id} {post.title}</i></span>
            <span>{post.body}</span>
            <button onClick={() => {
                setFavoritePost(post)
            }}>
                set favorite
            </button>
        </div>
    );
};

export default PostComponent;
