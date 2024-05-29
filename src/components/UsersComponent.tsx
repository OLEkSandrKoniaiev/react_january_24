import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";
import UserComponent from "./UserComponent";

interface IProps {
    users: IUserModel[] | undefined;
}

const UsersPage: FC<IProps> = ({users}) => {


    return (
        <div>
            {users?.map(user =>
                <UserComponent user={user} key={user.id}/>
            )}
        </div>
    );
};

export default UsersPage;
