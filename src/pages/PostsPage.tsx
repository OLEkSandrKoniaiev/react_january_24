import React, {useEffect} from 'react';
import {useAppDispatch} from "../redux/store";
import {postActions} from "../redux/slices/postSlice";
import PostsComponent from "../components/Posts/PostsComponent";
import styles from "../styles/General.module.css"

const PostsPage = () => {

    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postActions.loadPosts());
    }, []);

    return (
        <div className={styles.justifyCenter}>
            <PostsComponent/>
        </div>
    );
};

export default PostsPage;
