import React from 'react';
import cls from './Navbar.module.css'
import CustomNavLink from "../CustomNavLink/CustomNavLink.jsx";


const Navbar = () => {
    return (
        <div className={cls.navbar}>
             <div className={cls.navbarItem}>
                 <CustomNavLink to={"/about"}/>
             </div>
             <div className={cls.navbarItem}>
                 <CustomNavLink to={"/shop"}/>
             </div>
             <div className={cls.navbarItem}>
                 <CustomNavLink to={"/home"}/>
             </div>
        </div>
    );
};

export default Navbar;