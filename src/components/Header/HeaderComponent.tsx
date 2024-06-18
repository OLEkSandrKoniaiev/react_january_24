import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to={''}>home page</NavLink>
                </li>
                <li>
                    <NavLink to={'users'}>users page</NavLink>
                </li>
                <li>
                    <NavLink to={'posts'}>posts page</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default HeaderComponent;
