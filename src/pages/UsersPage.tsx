import React, {useEffect} from 'react';
import UsersComponent from "../components/Users/UsersComponent";
import {userActions} from "../redux/slices/userSlice";
import {useAppDispatch} from "../redux/store";

const UsersPage = () => {

    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, []);

    return (
        <div>
            <UsersComponent/>
        </div>
    );
};

export default UsersPage;
