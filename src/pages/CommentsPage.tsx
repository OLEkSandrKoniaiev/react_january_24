import React, {FC, useEffect, useState} from 'react';
import {ICommentModel} from "../models/ICommentModel";
import {commentApiService} from "../services/api.service";
import styles from "../styles/General.module.css"

const CommentsPage: FC = () => {

    const [comments, setComments] = useState<ICommentModel[]>();

    useEffect(() => {
        commentApiService.getAllComments().then(value => setComments(value.data))
    }, []);

    return (
        <div>
            {comments?.map(comment =>
                <div key={comment.id} className={styles.marginY10}>
                    {comment.id} - PostID: {comment.postId} - {comment.email}
                    <br/>
                    <b>{comment.name}</b>
                    <br/>
                    <span className={styles.truncate}>{comment.body}</span>
                </div>)}
        </div>
    );
};

export default CommentsPage;
