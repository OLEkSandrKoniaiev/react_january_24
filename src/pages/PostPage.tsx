import React, {useCallback, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {postActions} from "../redux/slices/postSlice";
import styles from "../styles/General.module.css"

const PostPage = () => {

    let {id} = useParams();
    const dispatch = useAppDispatch();
    const {post} = useAppSelector(state => state.postSlice);

    let navigate = useNavigate();

    const handleBackClick = useCallback(() => {
        navigate('/posts');
    }, [navigate]);

    useEffect(() => {
        dispatch(postActions.loadPostById(id))
    }, [id]);

    return (
        <div className={styles.details}>
            <b>{post && post.title}</b>
            <br/>
            <p className={styles.w600px}>{post && post.body}</p>
            <br/>
            <button onClick={handleBackClick}>
                back
            </button>
        </div>
    );
};

export default PostPage;