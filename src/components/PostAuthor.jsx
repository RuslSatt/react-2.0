import React from 'react';
import { useSelector } from 'react-redux';
import { allUsers } from '../store/reducers/usersReducer';

const PostAuthor = ({ userId }) => {
    const users = useSelector(allUsers);

    const foundUser = users.find(user => user.id === userId);

    return <span>{foundUser ? foundUser.name : 'Unknown user'}</span>;
};

export default PostAuthor;
