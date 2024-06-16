import {createBrowserRouter, RouteObject} from "react-router-dom";
import App from "../App";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import UserPostsPage from "../pages/UserPostsPage";
import CommentsPage from "../pages/CommentsPage";
import PostCommentsPage from "../pages/PostCommentsPage";

const routes: RouteObject[] = [
    {
        path: '', element: <App/>, children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'users/posts', element: <UserPostsPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'posts/comments', element: <PostCommentsPage/>},
            {path: 'comments', element: <CommentsPage/>}
        ]
    }
]


export const router = createBrowserRouter(routes);
