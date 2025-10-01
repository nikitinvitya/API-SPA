import React, {useEffect, useState} from 'react';
import classes from './Loading.module.css'

const Loading = () => {
    const [dots, setDots] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev.length < 3 ? prev + "." : ""));
        }, 100);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className={classes.container}>
            <h1>SPA</h1>
            <p>Loading{dots}</p>
        </div>
    );
};

export default Loading;