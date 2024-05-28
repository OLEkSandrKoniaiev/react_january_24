import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <NavLink to={"/"}>Home page</NavLink>
            <br/>
            <NavLink to={"/users"}>Users page</NavLink>
            <br/>
            <NavLink to={"/posts"}>Posts page</NavLink>
            <br/>
            <NavLink to={"/comments"}>Comments page</NavLink>
        </div>
    );
};

export default HeaderComponent;