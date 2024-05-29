import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import styles from "../../styles/General.module.css";

interface IProps {
    post: IPostModel;
}

const UserPostComponent: FC<IProps> = ({post}) => {
    return (
        <div>
            <div key={post.id} className={styles.marginY10}>
                {post.id} - UserID: {post.userId}
                <br/>
                <b>{post.title}</b>
                <br/>
                <span className={styles.truncate}>{post.body}</span>
            </div>
        </div>
    );
};

export default UserPostComponent;
