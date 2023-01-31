import React from 'react';
import { useParams } from 'react-router-dom';
import Post from '../components/Post';
import { getPosts } from '../helpers/getPosts';

const PostPage = () => {
    const { id } = useParams();

    const post = getPosts(id);

    return <div>{post ? <Post post={post} isView={true} /> : <p>Not page here</p>}</div>;
};

export default PostPage;
