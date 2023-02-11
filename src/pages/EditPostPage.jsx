import React from 'react';
import PostFromPage from './PostFormPage';
import { useParams } from 'react-router-dom';
import { useGetPostByUserIdQuery } from '../store/reducers/postsReducer';
import { useSelector } from 'react-redux';

const EditPostPage = () => {
    const { id } = useParams();

    const { data: post } = useGetPostByUserIdQuery(id);

    return (
        <div>
            <PostFromPage post={post} />
        </div>
    );
};

export default EditPostPage;
