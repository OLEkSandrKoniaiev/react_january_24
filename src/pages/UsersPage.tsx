import React, {FC, useEffect, useState} from 'react';
import {userApiService} from "../services/api.service";
import {IUserModel} from "../models/IUserModel";
import styles from "../styles/General.module.css";

const UsersPage: FC = () => {

    const [users, setUsers] = useState<IUserModel[]>();

    useEffect(() => {
        userApiService.getAllUsers().then(value => setUsers(value.data));
    }, []);

    return (
        <div>
            {users?.map(user =>
                <div key={user.id} className={styles.marginY10}>
                    {user.id} - {user.name} - {user.username} - {user.email}
                </div>)
            }
        </div>
    );
};

export default UsersPage;
