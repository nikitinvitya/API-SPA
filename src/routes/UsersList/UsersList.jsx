import React, {Suspense} from 'react';
import {Await, Link, useLoaderData} from "react-router-dom";
import Loading from "../../components/Loading/Loading.jsx";
import classes from './UsersList.module.css'



const UsersList = () => {

    const {usersPromise} = useLoaderData()

    return (
        <Suspense fallback={<Loading/>}>
            <Await resolve={usersPromise}>
                {(users) => (
                    <div className={classes.usersList}>
                        <h2>All users:</h2>
                        {users.map((user) => (
                            <Link
                                key={user.id}
                                to={`/users/${user.id}`}
                            >
                                <div className={classes.userLink}>
                                    <img src="/images/user-icon.svg" alt="user icon" width='100px'/>
                                    <h2>{user.name}</h2>
                                </div>
                            </Link>
                        ))
                        }
                    </div>
                )}
            </Await>
        </Suspense>
    );
};

export default UsersList;