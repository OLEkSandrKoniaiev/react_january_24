import React, {FC, useEffect, useState} from 'react';
import UserComponent from "../user/UserComponent";
import {IUserModel} from "../../models/IUserModel";
import {getUsers} from "../../services/user.api.service";
import PostsComponent from "../posts/PostsComponent";
import {IPostModel} from "../../models/IPostModel";
import {getPostsOfUser} from "../../services/post.api.service";
import styles from "../../styles/Users.module.css"

const UsersComponent: FC = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);
    const [posts, setPosts] = useState<IPostModel[]>([])
    let [userId, setUserId] = useState<number>(0);

    useEffect(() => {
        getUsers()
            .then(({data: {users}}) => {
                // console.log(value);
                // console.log(value.data);
                // console.log(value.data.users);

                setUsers(users);
            });
    }, []);

    useEffect(() => {
        if (userId !== 0) {
            getPostsOfUser(userId)
                .then(({data: {posts}}) => {
                    setPosts(posts);
                });
        }
    }, [userId]);


    const clickHandler = (id: number) => {
        setUserId(id);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className={styles.twoColumn}>
            <div>
                {
                    users.map((user,
                               index) =>
                        <UserComponent
                            key={index}
                            user={user}
                            clickHandler={clickHandler}
                        />
                    )
                }
            </div>
            <div>
                <PostsComponent
                    posts={posts}
                />
            </div>
        </div>
    );
};

export default UsersComponent;
