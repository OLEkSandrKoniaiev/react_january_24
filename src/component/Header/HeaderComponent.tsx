import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./Header.module.css"

const HeaderComponent = () => {
    return (
        <div className={styles.navBlock}>
            <NavLink to={'/'} className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                home
            </NavLink>
            <NavLink to={'/users'} className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                users
            </NavLink>
            <NavLink to={'/posts'} className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                posts
            </NavLink>
            <NavLink to={'/comments'} className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                comments
            </NavLink>
            <NavLink to={'/users/posts'} className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                users posts
            </NavLink>
            <NavLink to={'/posts/comments'}
                     className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                posts comments
            </NavLink>
        </div>
    );
};

export default HeaderComponent;
