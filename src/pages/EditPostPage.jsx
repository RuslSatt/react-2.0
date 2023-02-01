import React from 'react';
import PostFromPage from './PostFormPage';
import { useParams } from 'react-router-dom';
import { getPostById } from '../store/reducers/postsReducer';
import { useSelector } from 'react-redux';

const EditPostPage = () => {
    const { id } = useParams();

    const post = useSelector(state => getPostById(state, id));

    return (
        <div>
            <PostFromPage post={post} />
        </div>
    );
};

export default EditPostPage;
