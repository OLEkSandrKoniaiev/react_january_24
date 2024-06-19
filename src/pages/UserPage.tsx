import React, {useCallback, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {userActions} from "../redux/slices/userSlice";
import styles from "../styles/General.module.css"

const UserPage = () => {

    let {id} = useParams();
    const dispatch = useAppDispatch();
    const {user} = useAppSelector(state => state.userSlice);

    let navigate = useNavigate();

    const handleBackClick = useCallback(() => {
        navigate('/users');
    }, [navigate]);

    useEffect(() => {
        dispatch(userActions.loadUserById(id))
    }, [id]);

    return (
        <div className={styles.details}>
            <span>{user && user.username}</span>
            <br/>
            <span>{user && user.email}</span>
            <br/>
            <button onClick={handleBackClick}>
                back
            </button>
        </div>
    );
};

export default UserPage;
