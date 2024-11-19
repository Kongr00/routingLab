import React from 'react';
import {NavLink} from "react-router-dom";
import './CustomNavLink.css'

const CustomNavLink = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? "active navlink" : "navlink"
            }
        >
            {children}
        </NavLink>
    );
};

export default CustomNavLink;