import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import Post from '../components/Post';
import {
    allPosts,
    getPostsStatus,
    getPostsError,
    fetchPosts,
} from '../store/reducers/postsReducer';
import { useEffect } from 'react';

const PostsList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(allPosts);
    const postsStatus = useSelector(getPostsStatus);
    const postsError = useSelector(getPostsError);

    const ref = React.useRef(false);

    useEffect(() => {
        if (ref.current === false) {
            if (postsStatus === 'idle') {
                ref.current = true;
                dispatch(fetchPosts());
            }
        }
    }, [postsStatus, dispatch]);

    let content;
    if (postsStatus === 'loading') {
        content = <p>Loading...</p>;
    } else if (postsStatus === 'succeeded') {
        content = posts.map(post => <Post key={post.id.toString()} post={post}></Post>);
    } else if (postsStatus === 'failed') {
        content = <p>{postsError}</p>;
    }

    return <div>{content}</div>;
};

export default PostsList;
