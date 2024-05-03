import React, {FC, ReactNode} from 'react';
import {IPostModel} from "../../models/IPostModel";
import PostComponent from "../post/PostComponent";

type IProps = { posts: IPostModel[] }
    & { children?: ReactNode };

const PostsComponent: FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map(post => <PostComponent
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                    userId={post.userId}
                    tags={post.tags}
                    reactions={post.reactions}
                />)
            }
        </div>
    );
};

export default PostsComponent;