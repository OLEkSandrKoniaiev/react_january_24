import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {postApiService} from "../services/api.service";
import {ICommentModel} from "../models/ICommentModel";
import PostCommentsComponent from "../components/PostComments/PostCommentsComponent";

const PostCommentsPage = () => {

    const location = useLocation();

    const [comments, setComments] = useState<ICommentModel[]>();

    useEffect(() => {
        if (location.state.userId) {
            postApiService.getCommentsOfPost(location.state.userId).then(value => setComments(value.data));
        }
    }, [location.state.userId]);

    return (
        <div>
            <PostCommentsComponent comments={comments}/>
            <hr/>
        </div>
    );
};

export default PostCommentsPage;
