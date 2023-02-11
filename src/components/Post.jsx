import React from 'react';
import PostAuthor from './PostAuthor';
import ReactionButtons from './ReactionButtons';
import { Link } from 'react-router-dom';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useDeletePostQuery } from '../store/reducers/postsReducer';

const Post = ({ post, isView }) => {
    const navigate = useNavigate();

    const handleDeletePost = async () => {
        await useDeletePostQuery(post.id);

        navigate('/');
    };

    let deleteButton;
    if (isView) {
        deleteButton = (
            <div>
                <Button text={'Delete post'} handleStatePost={handleDeletePost} />
            </div>
        );
    }

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
            {deleteButton}
            <div>
                <ReactionButtons post={post} />
            </div>
        </div>
    );
};

export default Post;
