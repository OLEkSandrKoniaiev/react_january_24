import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";

const PostComponent: FC<IPostModel> = ({id, title, body, tags, reactions}) => {
    return (
        <div>
            <span>{id}</span>
            <h3>{title} {tags.join(', ')}</h3>
            <p>{body}</p>
            <p>Reactions: {reactions}</p>
        </div>
    );
};

export default PostComponent;