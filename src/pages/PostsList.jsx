import { useSelector } from 'react-redux';
import React from 'react';
import Post from '../components/Post';
import { allPosts } from '../store/reducers/postsReducer';

const PostsList = () => {
    const posts = useSelector(allPosts);

    const postsList = posts.map(post => <Post key={post.id.toString()} post={post}></Post>);

    return <div>{postsList}</div>;
};

export default PostsList;
