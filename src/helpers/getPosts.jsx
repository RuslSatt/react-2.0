import { useSelector } from 'react-redux';
import { allPosts } from '../store/reducers/postsReducer';

export const getPosts = id => {
    const posts = useSelector(allPosts);

    return posts.find(post => post.id.toString() === id);
};
