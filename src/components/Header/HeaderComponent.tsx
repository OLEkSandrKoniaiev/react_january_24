import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./Header.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {authService} from "../../services/auth.service";
import {authAction} from "../../redux/slices/authSlice";

const HeaderComponent = () => {
    const {me} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    if (authService.getAccessToken() && !me) {
        dispatch(authAction.me());
    }

    return (
        <div className={styles.headerBlock}>
            HeaderComponent
            {
                me ?
                    <div>
                        {me.username} -- {new Date(me.last_login).toDateString()}
                    </div>
                    :
                    <div>
                        <NavLink to={'/login'}
                                 className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                            Login
                        </NavLink>
                        <NavLink to={'/register'}
                                 className={({isActive}) => (isActive ? styles.navLinkActive : styles.navLink)}>
                            Register
                        </NavLink>
                    </div>
            }
        </div>
    );
};

export default HeaderComponent;