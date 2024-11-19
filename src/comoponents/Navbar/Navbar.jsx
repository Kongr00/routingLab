import React from 'react';
import cls from './Navbar.module.css'
import CustomNavLink from "../CustomNavLink/CustomNavLink.jsx";


const Navbar = () => {
    return (
        <div className={cls.navbar}>
             <div className={cls.navbarItem}>
                 <CustomNavLink to={"about"}>
                     About
                 </CustomNavLink>
             </div>
             <div className={cls.navbarItem}>
                 <CustomNavLink to={"shop"}>
                     Shop
                 </CustomNavLink>
             </div>
             <div className={cls.navbarItem}>
                 <CustomNavLink to={"home"}>
                        Home
                 </CustomNavLink>
             </div>
        </div>
    );
};

export default Navbar;