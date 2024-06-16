import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {useContextProvider} from "../../context/ContextProvider";
import styles from "./User.module.css"

interface IProps {
    user: IUserModel;
}

const UserComponent: FC<IProps> = ({user}) => {

    const {userStore: {setFavoriteUser}} = useContextProvider()

    return (
        <div className={styles.userBlock}>
            {user.id} {user.name} - {user.username}
            <button onClick={() => {
                setFavoriteUser(user)
            }}>
                set favorite
            </button>
        </div>
    );
};

export default UserComponent;
