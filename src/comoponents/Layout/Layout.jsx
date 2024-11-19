import React from 'react';
import {Outlet} from "react-router-dom";
import cls from './Layout.module.css'
const Layout = () => {
    return (
        <div className={cls.container}>

            <Outlet/>
        </div>
    );
};

export default Layout;