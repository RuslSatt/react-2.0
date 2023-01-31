import React from 'react';
import PostFromPage from './PostFormPage';
import { useParams } from 'react-router-dom';
import { getPosts } from '../helpers/getPosts';

const EditPostPage = () => {
    const { id } = useParams();

    const post = getPosts(id);

    return (
        <div>
            <PostFromPage post={post} />
        </div>
    );
};

export default EditPostPage;
