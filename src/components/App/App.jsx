import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import UsersList from "../../routes/UsersList/UsersList.jsx";
import NotFound from "../../routes/NotFound/NotFound.jsx";
import Layout from "../../routes/Layout/Layout.jsx";
import User from "../../routes/User/User.jsx";
import AlbumsList from "../../routes/AlbumsList/AlbumsList.jsx";
import UserAlbum from "../../routes/UserAlbum/UserAlbum.jsx";
import classes from './App.module.css'
import Home from "../../routes/Home/Home.jsx";
import {albumsLoader, userAlbumLoader, userLoader, usersLoader} from "../../utils/loaders/loaders.js";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/albums',
                loader: albumsLoader,
                element: <AlbumsList/>
            },
            {
                path: '/users',
                loader: usersLoader,
                element: <UsersList/>
            },
            {
                path: '/users/:id',
                loader: userLoader,
                element: <User/>
            },
            {
                path: '/users/:id/:albumID',
                loader: userAlbumLoader,
                element: <UserAlbum/>
            },
            {
                path: '*',
                element: <NotFound/>
            },
        ],
    },
    ]
);

const App = () => {
    return <RouterProvider router={router}/>
};

export default App;