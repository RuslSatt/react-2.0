import React from 'react';
import { useSelector } from 'react-redux';
import { allUsers } from '../store/reducers/usersReducer';
import { Link } from 'react-router-dom';

const UsersList = () => {
    const users = useSelector(allUsers);

    const usersList = users.map(user => (
        <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
        </li>
    ));

    return (
        <>
            <h2 className="fz-20">Users</h2>
            <ul>{usersList}</ul>
        </>
    );
};

export default UsersList;
