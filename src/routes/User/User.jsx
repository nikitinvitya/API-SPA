import React, {Suspense} from 'react';
import {Await, Link, useLoaderData} from "react-router-dom";
import classes from './User.module.css'
import Loading from "../../components/Loading/Loading.jsx";



const User = () => {
    const data = useLoaderData()

    return (
        <Suspense fallback={<Loading/>}>
            <Await resolve={data.userDataPromise}>
                {(user) => (
                    <div className={classes.userInfo}>
                        <h2>User info:</h2>
                        <img src="/images/user-icon.svg" alt="user icon"/>
                        <p>name: {user.name}</p>
                        <p>username: {user.username}</p>
                        <p>phone: {user.phone}</p>
                    </div>
                )}

            </Await>
            <Await resolve={data.userAlbumsPromise}>
                {(albums) => (
                    <div className={classes.userAlbums}>
                        <h2>Users albums:</h2>
                        {albums.map((album) =>
                            <Link
                                to={`/users/${album.userId}/${album.id}`}
                                key={album.id}
                            >
                                <div className={classes.albumLink}>
                                    <img src="/images/album.svg" alt="album"/>
                                    <p>{album.title}</p>
                                </div>
                            </Link>
                        )}
                    </div>
                )}
            </Await>
        </Suspense>
    )
};

export default User;