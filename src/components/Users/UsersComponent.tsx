import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import UserComponent from "../User/UserComponent";

interface IProps {
    users: IUserModel[] | undefined;
}

const UsersComponent: FC<IProps> = ({users}) => {
    return (
        <div>
            {users?.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;
