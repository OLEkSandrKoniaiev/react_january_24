import React, {FC, useEffect, useState} from 'react';
import {IPostModel} from "../models/IPostModel";
import {postApiService} from "../services/api.service";
import styles from "../styles/General.module.css"

const PostsPage: FC = () => {

    const [posts, setPosts] = useState<IPostModel[]>();

    useEffect(() => {
        postApiService.getAllPosts().then(value => setPosts(value.data));
    }, []);

    return (
        <div>
            {posts?.map(post =>
            <div key={post.id} className={styles.marginY10}>
                {post.id} - UserID: {post.userId}
                <br/>
                <b>{post.title}</b>
                <br/>
                <span className={styles.truncate}>{post.body}</span>
            </div>)}
        </div>
    );
};

export default PostsPage;
