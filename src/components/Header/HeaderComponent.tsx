import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./Header.module.css"

const HeaderComponent = () => {
    return (
        <div className={styles.navBlock}>
            <NavLink to={''} className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                home page
            </NavLink>

            <NavLink to={'users'} className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                users page
            </NavLink>

            <NavLink to={'posts'} className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                posts page
            </NavLink>
        </div>
    );
};

export default HeaderComponent;
