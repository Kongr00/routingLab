import React from 'react';
import {Outlet} from "react-router-dom";
import cls from './Layout.module.css'
import Navbar from "../Navbar/Navbar.jsx";
const Layout = () => {
    return (
        <div className={cls.container}>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Layout;