import React from 'react';
import {useStore} from "../../context/ContextProvider";
import PostComponent from "../Post/PostComponent";

const PostsComponent = () => {

    // const context = useContextProvider();
    const {postStore: {allPosts}} = useStore();

    return (
        <div>
            {
                allPosts.map(post => <PostComponent post={post} key={post.id}/>)
            }
        </div>
    );
};

export default PostsComponent;
