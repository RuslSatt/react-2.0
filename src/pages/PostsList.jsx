import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import Post from '../components/Post';
import { useGetPostsQuery } from '../store/reducers/postsReducer';

const PostsList = () => {
    const dispatch = useDispatch();

    const ref = React.useRef(false);

    const { data: posts, isSuccess, isLoading, isError, error } = useGetPostsQuery();

    let content;
    if (isLoading) {
        content = <p>Loading...</p>;
    } else if (isSuccess) {
        content = posts.map(post => <Post key={post.id.toString()} post={post}></Post>);
    } else if (isError) {
        content = <p>{error}</p>;
    }

    return <div>{content}</div>;
};

export default PostsList;
