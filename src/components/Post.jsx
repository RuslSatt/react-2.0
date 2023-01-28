import React from 'react';

const Post = ({ title, content }) => {
    return (
        <div>
            <p>{title}</p>
            <p>{content}</p>
        </div>
    );
};

export default Post;
