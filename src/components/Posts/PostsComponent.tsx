import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import PostComponent from "../Post/PostComponent";

interface IProps {
    posts: IPostModel[] | undefined;
}

const PostsComponent: FC<IProps> = ({posts}) => {
    return (
        <div>
            {posts?.map(post =>
                <PostComponent key={post.id} post={post}/>
            )}
        </div>
    );
};

export default PostsComponent;
