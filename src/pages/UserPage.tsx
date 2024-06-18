import React, {useEffect} from 'react';
import usersPage from "./UsersPage";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {userActions} from "../redux/slices/userSlice";

const UserPage = () => {

    let {id} = useParams();
    const dispatch = useAppDispatch();
    const {user} = useAppSelector(state => state.userSlice);

    useEffect(() => {
        dispatch(userActions.loadUserById(id))
    }, [id]);

    return (
        <div>
            {
                user && user.email
            }
        </div>
    );
};

export default UserPage;
