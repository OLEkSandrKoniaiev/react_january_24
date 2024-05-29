import React, {useEffect, useState} from 'react';
import UserPostsComponent from "../components/UserPosts/UserPostsComponent";
import {IPostModel} from "../models/IPostModel";
import {userApiService} from "../services/api.service";
import {useLocation, useParams} from "react-router-dom";

const UserPostsPage = () => {
    // const {id} = useParams();

    const location = useLocation();

    const [posts, setPosts] = useState<IPostModel[]>();

    useEffect(() => {
        if (location.state.userId) {
            userApiService.getPostsOfUser(location.state.userId).then(value => setPosts(value.data));
        }
    }, [location.state.userId]);

    return (
        <div>
            <hr/>
            <UserPostsComponent posts={posts}/>
        </div>
    );
};

export default UserPostsPage;
