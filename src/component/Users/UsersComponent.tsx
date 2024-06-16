import React from 'react';
import {useStore} from "../../context/ContextProvider";
import UserComponent from "../User/UserComponent";

const UsersComponent = () => {

    // const context = useContextProvider();
    const {userStore: {allUsers}} = useStore();

    return (
        <div>
            {
                allUsers.map(user => <UserComponent user={user} key={user.id}/>)
            }
        </div>
    );
};

export default UsersComponent;
