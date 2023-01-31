import React from 'react';
import PostAuthor from './PostAuthor';
import ReactionButtons from './ReactionButtons';
import { Link } from 'react-router-dom';

const Post = ({ post, isView }) => {
    return (
        <div className="Post">
            <p>{post.title}</p>
            <p>{post.content}</p>
            <div>
                {isView ? (
                    <Link to={`/edit/${post.id}`}>Edit post</Link>
                ) : (
                    <Link to={`/post/${post.id}`}>View post</Link>
                )}
                <PostAuthor userId={post.userId} />
            </div>
            <div>
                <ReactionButtons post={post} />
            </div>
        </div>
    );
};

export default Post;
