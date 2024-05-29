import React, {useEffect, useState} from 'react';
import UsersComponent from "../components/Users/UsersComponent";
import {Outlet} from "react-router-dom";
import {IUserModel} from "../models/IUserModel";
import {userApiService} from "../services/api.service";

const UsersPage = () => {

    const [users, setUsers] = useState<IUserModel[]>();

    useEffect(() => {
        userApiService.getAllUsers().then(value => setUsers(value.data));
    }, []);

    return (
        <div>
            <UsersComponent users={users}/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;
