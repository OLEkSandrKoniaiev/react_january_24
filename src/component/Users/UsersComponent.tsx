import React from 'react';
import {useContextProvider} from "../../context/ContextProvider";
import UserComponent from "../User/UserComponent";

const UsersComponent = () => {

    // const context = useContextProvider();
    const {userStore: {allUsers}} = useContextProvider();

    return (
        <div>
            {
                allUsers.map(user => <UserComponent user={user} key={user.id}/>)
            }
        </div>
    );
};

export default UsersComponent;
