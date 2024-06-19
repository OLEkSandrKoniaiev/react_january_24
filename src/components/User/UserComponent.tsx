import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {useNavigate} from "react-router-dom";
import styles from "./User.module.css";

interface IProps {
    user: IUserModel
}

const UserComponent: FC<IProps> = ({user}) => {

    let navigate = useNavigate();

    return (
        <div className={styles.userBlock}>
            {user.id} {user.name}
            <button onClick={() => {
                navigate(user.id.toString());
            }}>
                details
            </button>
        </div>
    );
};

export default UserComponent;
