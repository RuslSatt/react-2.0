import React from 'react';
import { useParams } from 'react-router-dom';
import Post from '../components/Post';
import { getPostById } from '../store/reducers/postsReducer';
import { useSelector } from 'react-redux';

const PostPage = () => {
    const { id } = useParams();

    const post = useSelector(state => getPostById(state, id));

    return <div>{post ? <Post post={post} isView={true} /> : <p>Not page here</p>}</div>;
};

export default PostPage;
