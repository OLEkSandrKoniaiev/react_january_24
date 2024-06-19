import React, {useEffect} from 'react';
import UsersComponent from "../components/Users/UsersComponent";
import {userActions} from "../redux/slices/userSlice";
import {useAppDispatch} from "../redux/store";
import styles from "../styles/General.module.css"

const UsersPage = () => {

    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, []);

    return (
        <div className={styles.justifyCenter}>
            <UsersComponent/>
        </div>
    );
};

export default UsersPage;
