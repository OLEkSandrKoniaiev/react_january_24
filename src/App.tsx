import React, {useEffect} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./component/Header/HeaderComponent";
import {postService, userService} from "./services/api.service";
import {Context} from "./context/ContextProvider";


const App = () => {

    useEffect(() => {
        userService.getUsers().then(value => console.log(value));
        postService.getPosts().then(value => console.log(value));
    }, []);

    return (
        <div>
            <HeaderComponent/>
            <Context.Provider value={null}>
                <Outlet/>
            </Context.Provider>

        </div>
    );
};

export default App;
