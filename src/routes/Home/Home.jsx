import React from 'react';
import {Link} from "react-router-dom";
import classes from './Home.module.css'

const Home = () => {
    return (
        <div className={classes.container}>
            <h1>Welcome to SPA</h1>
            <div className={classes.links}>
                <Link to='/users'><p>Go to users</p></Link>
                <Link to='/albums'><p>Go to albums</p></Link>
            </div>
        </div>
    );
};

export default Home;