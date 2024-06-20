import React from 'react';
import HeaderComponent from "../components/Header/HeaderComponent";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            MainLayout
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;