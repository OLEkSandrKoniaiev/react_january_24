import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./Header.module.css"

const HeaderComponent = () => {
    return (
        <div className={styles.navBlock}>
            <ul className={styles.navList}>
                <li>
                    <NavLink to={'/'}
                             className={({isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                        Login page
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'cars'}
                             className={({isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}>
                        Cars page
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default HeaderComponent;
