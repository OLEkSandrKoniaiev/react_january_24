import React, {FC, ReactNode} from 'react';
import {IUserModel} from "../../models/IUserModel";

type IProps<T> = T
    & { children?: ReactNode }
    & { clickHandler: (id: number) => void };

const UserComponent: FC<IProps<IUserModel>> = ({
                                                  id,
                                                  firstName,
                                                  maidenName,
                                                  lastName,
                                                  age,
                                                  username,
                                                  clickHandler
                                              }) => {

    return (
        <div>
            <p>{id} {firstName} {maidenName} {lastName} age:{age}</p>
            <p>Username: {username}</p>
            <button onClick={() => {
                clickHandler(id);
            }}>Вивести пости даного юзера
            </button>
        </div>
    );
};

export default UserComponent;
