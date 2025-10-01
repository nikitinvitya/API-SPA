import React, {Suspense} from 'react';
import {Await, Link, useLoaderData} from "react-router-dom";
import classes from './AlbumsList.module.css'
import Loading from "../../components/Loading/Loading.jsx";


const AlbumsList = () => {
    const {albums} = useLoaderData()

    return (
        <Suspense fallback={<Loading/>}>
            <Await resolve={albums}>
                {(albums) => (
                    <div className={classes.container}>
                        <h2>All albums:</h2>
                        {albums.map((album) => (
                            <Link
                                key={album.id}
                                to={`/users/${album.userId}/${album.id}`}
                            >
                                <div className={classes.albumLink}>
                                    <img src="/images/album.svg" alt="photo"/>
                                    {album.title}
                                </div>
                            </Link>
                        ))
                        }
                    </div>
                )
                }
            </Await>
        </Suspense>

    );
};

export default AlbumsList;