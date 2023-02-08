import React from 'react';
import { useSelector } from 'react-redux';
import { getUserById } from '../store/reducers/usersReducer';
import { useParams } from 'react-router-dom';
import { getPostsByUser } from '../store/reducers/postsReducer';
import { Link } from 'react-router-dom';

const UserPage = () => {
    const { userId } = useParams();

    const user = useSelector(state => getUserById(state, Number(userId)));

    const userPosts = useSelector(state => getPostsByUser(state, Number(userId)));

    const postsTitle = userPosts.map(post => (
        <li key={post.id}>
            <Link to={`/post/${post.userId}`}>{post.title}</Link>
        </li>
    ));

    return (
        <div>
            <h2>{user?.name}</h2>
            <ol>{postsTitle}</ol>
        </div>
    );
};

export default UserPage;
