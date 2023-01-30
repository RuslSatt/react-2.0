import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { useState } from 'react';
import { addNewPost } from '../store/reducers/postsReducer';
import { useDispatch, useSelector } from 'react-redux';
import { allUsers } from '../store/reducers/usersReducer';

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const users = useSelector(allUsers);

    const usersList = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

    const dispatch = useDispatch();

    const handleSavePost = () => {
        if (title && content && userId) {
            dispatch(addNewPost({ title, content, userId }));

            setTitle('');
            setContent('');
            setUserId('');
        }
    };

    const handleSelectUser = e => {
        setUserId(e.target.value);
    };

    return (
        <div>
            <div>
                <p>Add a new post please</p>
            </div>
            <Input value={title} setValue={setTitle} name={'Set name'}></Input>
            <Input value={content} setValue={setContent} name={'Set last name'}></Input>
            <select value={userId} onChange={handleSelectUser}>
                <option value=""></option>
                {usersList}
            </select>
            <Button handleSavePost={handleSavePost}></Button>
        </div>
    );
};

export default AddPostForm;
