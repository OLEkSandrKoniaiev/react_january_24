import React, {useEffect, useMemo, useState} from 'react';
import {useStore} from "../../context/ContextProvider";
import {IUserWithPostsModel, UserWithPostsType} from "../../models/IUserWithPostsModel";
import UserPostsComponent from "../UserPosts/UserPostsComponent";


const UsersPostsComponent = () => {

    const {postStore: {allPosts}, userStore: {allUsers}} = useStore()

    const [usersWithPostsState, setUsersWithPostsState] = useState<UserWithPostsType[]>([])
    
    const userWithPostsArray = useMemo(() => {
        return () => {

            // const map = allUsers.map(user => {
            //     const posts = allPosts.filter(post => post.userId === user.id);
            //     let newUser = {...user, posts: posts};
            //     return newUser;
            // })
            // return map

            return allUsers.map(user => {
                return {...user, posts: allPosts.filter(post => post.userId === user.id)};
            })
        }
    }, [allPosts, allUsers])

    useEffect(() => {
        setUsersWithPostsState(userWithPostsArray);
    }, [userWithPostsArray]);

    return (
        <div>
            {
                usersWithPostsState.map(user => <UserPostsComponent user={user} key={user.id}/>)
            }
        </div>
    );
};

export default UsersPostsComponent;
