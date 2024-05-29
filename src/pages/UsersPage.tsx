import React, {FC, useEffect, useState} from 'react';
import {userApiService} from "../services/api.service";
import {IUserModel} from "../models/IUserModel";
import UsersComponent from "../components/Users/UsersComponent";

const UsersPage: FC = () => {

    const [users, setUsers] = useState<IUserModel[]>();

    useEffect(() => {
        userApiService.getAllUsers().then(value => setUsers(value.data));
    }, []);

    return (
        <div>
            <UsersComponent users={users}/>
        </div>
    );
};

export default UsersPage;
