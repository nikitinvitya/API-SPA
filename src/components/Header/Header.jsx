import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './Header.module.css'

const Header = () => {
    return (
        <header>
            <NavLink
                to='/users'
                className={({ isActive }) => (
                    isActive ? `${classes.activeLink}` : '')}>
                Users
            </NavLink>
            <NavLink
                to='/albums'
                className={({ isActive }) => (
                    isActive ? `${classes.activeLink}` : '')}>
                Albums
            </NavLink>
        </header>
    );
};

export default Header;