import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";
import UserPostComponent from "./UserPostComponent";

interface IProps {
    posts: IPostModel[] | undefined;
}

const UserPostsComponent: FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts?.map(post => <UserPostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default UserPostsComponent;