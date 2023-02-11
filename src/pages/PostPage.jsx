import React from 'react';
import { useParams } from 'react-router-dom';
import Post from '../components/Post';
import { useGetPostByUserIdQuery } from '../store/reducers/postsReducer';
import { useSelector } from 'react-redux';

const PostPage = () => {
    const { id } = useParams();

    const { data: post, isError, isLoading, isSuccess } = useGetPostByUserIdQuery(id);

    return <div>{post ? <Post post={post} isView={true} /> : <p>Not page here</p>}</div>;
};

export default PostPage;
