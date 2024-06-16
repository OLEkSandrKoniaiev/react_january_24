import React, {useEffect, useState} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./component/Header/HeaderComponent";
import {commentService, postService, userService} from "./services/api.service";
import {Context} from "./context/ContextProvider";
import {IUserModel} from "./models/IUserModel";
import {IPostModel} from "./models/IPostModel";
import {ICommentModel} from "./models/ICommentModel";


const App = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);
    const [posts, setPosts] = useState<IPostModel[]>([]);
    const [comments, setComments] = useState<ICommentModel[]>([]);
    const [favoriteUserState, setFavoriteUserState] = useState<IUserModel | null>(null);
    const [favoritePostState, setFavoritePostState] = useState<IPostModel | null>(null);


    useEffect(() => {
        userService.getUsers().then(value => setUsers(value.data));
        postService.getPosts().then(value => setPosts(value.data));
        commentService.getComments().then(value => setComments(value.data));
    }, []);

    const liftUser = (obj: IUserModel) => {
        setFavoriteUserState(obj);
    };
    const liftPost = (obj: IPostModel) => {
        setFavoritePostState(obj);
    };

    return (
        <div>
            <HeaderComponent/>
            <Context.Provider value={{
                userStore: {
                    allUsers: users,
                    setFavoriteUser: (obj: IUserModel) => liftUser(obj)
                },
                postStore: {
                    allPosts: posts,
                    setFavoritePost: (obj: IPostModel) => liftPost(obj)
                },
                commentStore: {
                    allComments: comments
                }
            }}>
                <Outlet/>
            </Context.Provider>
            <hr/>
            Favorite user: {favoriteUserState && <div>{favoriteUserState.email}</div>}
            <hr/>
            <hr/>
            Favorite post topic: {favoritePostState && <div>{favoritePostState.title}</div>}
            <hr/>
        </div>
    );
};

export default App;
