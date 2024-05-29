import React, {FC, useEffect, useState} from 'react';
import {IPostModel} from "../models/IPostModel";
import {postApiService} from "../services/api.service";
import PostsComponent from "../components/Posts/PostsComponent";
import {Outlet} from "react-router-dom";

const PostsPage: FC = () => {

    const [posts, setPosts] = useState<IPostModel[]>();

    useEffect(() => {
        postApiService.getAllPosts().then(value => setPosts(value.data));
    }, []);

    return (
        <div>
            <Outlet/>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;
