import React, {useEffect} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./component/Header/HeaderComponent";
import {useStore} from "./context/ContextProvider";
import {commentService, postService, userService} from "./services/api.service";


const App = () => {

    const {
        userStore,
        userStore: {favoriteUser},
        postStore,
        postStore: {favoritePost},
        commentStore
    } = useStore();

    useEffect(() => {
        userService.getUsers().then(value => userStore.loadUsers(value.data));
        postService.getPosts().then(value => postStore.loadPosts(value.data));
        commentService.getComments().then(value => commentStore.loadComments(value.data));
    }, []);

    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <hr/>
            Favorite user: {favoriteUser && <div>{favoriteUser.email}</div>}
            <hr/>
            Favorite post topic: {favoritePost && <div>{favoritePost.title}</div>}
            <hr/>
        </div>
    );
};

export default App;
