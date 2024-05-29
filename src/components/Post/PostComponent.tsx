import React, {FC} from 'react';
import styles from "../../styles/General.module.css";
import {IPostModel} from "../../models/IPostModel";
import {NavLink} from "react-router-dom";

interface IProps {
    post: IPostModel;
}

const PostComponent: FC<IProps> = ({post}) => {
    return (
        <div className={styles.marginY10}>
            <NavLink to={post.id.toString()} state={{userId: post.id}}
                     className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
            {post.id} - UserID: {post.userId}
            </NavLink>
            <br/>
            <b>{post.title}</b>
            <br/>
            <span className={styles.truncate}>{post.body}</span>
        </div>
    );
};

export default PostComponent;
