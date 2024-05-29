import {createBrowserRouter} from "react-router-dom";
import React from "react";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";


export const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <h2>Please use only the correct url</h2>,
        children: [
            {index: true, element: <HomePage/>},
            {path: '/users', element: <UsersPage/>},
            {path: '/posts', element: <PostsPage/>},
            {path: '/comments', element: <CommentsPage/>}
        ]
    }
]);
