import React, {FC, useEffect, useState} from 'react';
import {ICommentModel} from "../models/ICommentModel";
import {commentApiService} from "../services/api.service";
import CommentsComponent from "../components/CommentsComponent";

const CommentsPage: FC = () => {

    const [comments, setComments] = useState<ICommentModel[]>();

    useEffect(() => {
        commentApiService.getAllComments().then(value => setComments(value.data))
    }, []);

    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;
