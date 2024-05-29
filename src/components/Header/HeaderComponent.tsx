import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./Header.module.css"

const HeaderComponent = () => {
    return (
        <div className={styles.navBlock}>
            <NavLink to={"/"} className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                Home page
            </NavLink>
            <NavLink to={"/users"} className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                Users page
            </NavLink>
            <NavLink to={"/posts"} className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                Posts page
            </NavLink>
            <NavLink to={"/comments"} className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                Comments page
            </NavLink>
        </div>
    );
};

export default HeaderComponent;
