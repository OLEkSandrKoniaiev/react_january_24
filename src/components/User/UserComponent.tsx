import React, {FC} from 'react';
import styles from "../../styles/General.module.css";
import {IUserModel} from "../../models/IUserModel";

interface IProps {
    user: IUserModel;
}

const UserComponent: FC<IProps> = ({user}) => {
    return (
        <div className={styles.marginY10}>
            {user.id} - {user.name} - {user.username} - {user.email}
        </div>
    );
};

export default UserComponent;
