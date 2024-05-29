import React, {FC} from 'react';
import styles from "../styles/General.module.css";
import {IUserModel} from "../models/IUserModel";
import {NavLink} from "react-router-dom";

interface IProps {
    user: IUserModel;
}

const UserComponent: FC<IProps> = ({user}) => {
    return (
        <div className={styles.marginY10}>
            <NavLink to={user.id.toString()} state={{userId: user.id}}>
                {user.id} - {user.name} - {user.username} - {user.email}
            </NavLink>
        </div>
    );
};

export default UserComponent;
