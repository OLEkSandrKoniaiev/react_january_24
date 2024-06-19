import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import {useNavigate} from "react-router-dom";
import styles from "./Post.module.css";

interface IProps {
    post: IPostModel
}

const PostComponent: FC<IProps> = ({post}) => {

    let navigate = useNavigate();

    return (
        <div className={styles.postBlock}>
            {post.id} {post.title}
            <button onClick={() => {
                navigate(post.id.toString());
            }}>
                details
            </button>
        </div>
    );
};

export default PostComponent;