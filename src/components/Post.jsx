import React from 'react';
import PostAuthor from './PostAuthor';

const Post = ({ title, content, userId }) => {
    return (
        <div className="Post">
            <p>{title}</p>
            <p>{content}</p>
            <div>
                <PostAuthor userId={userId} />
            </div>
        </div>
    );
};

export default Post;
