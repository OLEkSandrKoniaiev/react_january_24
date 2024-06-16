import React, {FC} from 'react';
import {UserWithPostsType} from "../../models/IUserWithPostsModel";
import styles from "./UserPosts.module.css"

type TypeProps = {
    user: UserWithPostsType
};

// interface IProps {
//     user: IUserWithPostsModel
// };

const UserPostsComponent: FC<TypeProps> = ({user}) => {
    return (
        <div className={styles.userPostsBlock}>
            <b>{user.id} {user.name} - {user.username}</b>
            {
                user.posts.map(post =>
                    <div className={styles.postBlock}>
                        <span><i>{post.id} {post.title}</i></span>
                        <span>{post.body}</span>
                    </div>)
            }
        </div>
    );
};

export default UserPostsComponent;
