import React from 'react';
import PostAuthor from './PostAuthor';
import ReactionButtons from './ReactionButtons';

const Post = ({ post }) => {
    return (
        <div className="Post">
            <p>{post.title}</p>
            <p>{post.content}</p>
            <div>
                <PostAuthor userId={post.userId} />
            </div>
            <div>
                <ReactionButtons post={post} />
            </div>
        </div>
    );
};

export default Post;
