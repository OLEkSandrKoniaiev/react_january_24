import React, {useEffect, useMemo, useState} from 'react';
import {useContextProvider} from "../../context/ContextProvider";
import {PostWithCommentsType} from "../../models/IPostWithCommentsModel";
import PostCommentsComponent from "../PostComments/PostCommentsComponent";

const PostsCommentsComponent = () => {

    const {commentStore: {allComments}, postStore: {allPosts}} = useContextProvider();

    const [postsWithCommentsState, setPostsWithCommentsState] = useState<PostWithCommentsType[]>([])

    const postWithCommentsArray = useMemo(() => {
        return () => {
            return allPosts.map(post => {
                return {...post, comments: allComments.filter(comment => comment.postId === post.id)};
            })
        }
    }, [allPosts, allComments])

    useEffect(() => {
        setPostsWithCommentsState(postWithCommentsArray)
    }, [postWithCommentsArray]);

    return (
        <div>
            {
                postsWithCommentsState.map(post => <PostCommentsComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsCommentsComponent;
