import React, {Suspense} from 'react';
import {Await, Link, useLoaderData, useParams} from "react-router-dom";
import classes from './UserAlbum.module.css'
import Loading from "../../components/Loading/Loading.jsx";




const UserAlbum = () => {
    const data = useLoaderData()

    return (
        <Suspense fallback={<Loading/>}>
            <Await resolve={data.userDataPromise}>
                {(user) => (
                    <div className={classes.userData}>
                        <img src="/images/user-icon.svg" alt="user icon" width='100px'/>

                        <h2>Created by:&#32;
                            <Link to={`/users/${user.id}`}>
                                {user.name}
                            </Link>
                        </h2>
                    </div>
                )}
            </Await>
            <Await resolve={data.albumPhotosPromise}>
                {(photos) => (
                    <div className={classes.container}>
                        <h2>Posts:</h2>
                        {photos.map((photo) => (
                            <div
                                key={photo.id}
                                className={classes.post}
                            >
                                <img src="/images/post-photo.svg" alt="photo" width='200px' height='200px'/>
                                <p>{photo.title}</p>
                            </div>
                        ))}
                    </div>
                )
                }
            </Await>
        </Suspense>
    );
};

export default UserAlbum;