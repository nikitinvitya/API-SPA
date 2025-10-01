import React from 'react';
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={ window.location.pathname === '/' ? classes.fixedbottom : ''}>
            <p>Created by: Nikitin Victar</p>
            <p>BSU: 2025</p>
        </footer>
    );
};

export default Footer;