import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import classes from './Layout.module.css'
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Layout = () => {
    return (
        <div className={classes.container}>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;