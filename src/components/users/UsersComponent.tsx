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
            .then(value => {
                // console.log(value);
                // console.log(value.data);
                // console.log(value.data.users);

                let caughtUsers = value.data.users;
                setUsers(caughtUsers);
            });
    }, []);

    useEffect(() => {
        if (userId !== 0) {
            getPostsOfUser(userId)
                .then(value => {
                    // console.log(value);
                    // console.log(value.data);
                    // console.log(value.data.posts);

                    let caughtPosts = value.data.posts;
                    setPosts(caughtPosts);
                })
        }
    }, [userId]);


    const clickHandler = (id: number) => {
        setUserId(id);
    }

    return (
        <div className={styles.twoColumn}>
            <div>
                {
                    users.map(({id, firstName, maidenName, lastName, age, username},
                               index) =>
                        <UserComponent
                            key={index}
                            id={id}
                            firstName={firstName}
                            maidenName={maidenName}
                            lastName={lastName}
                            age={age}
                            username={username}
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
