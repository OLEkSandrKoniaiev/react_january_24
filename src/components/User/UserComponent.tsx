import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {useNavigate} from "react-router-dom";

interface IProps {
    user: IUserModel
}

const UserComponent: FC<IProps> = ({user}) => {

    let navigate = useNavigate();

    return (
        <div>
            {user.id} {user.name} - {user.username}
            <button onClick={() => {
                navigate(user.id.toString());
            }}>
                detail
            </button>
        </div>
    );
};

export default UserComponent;
