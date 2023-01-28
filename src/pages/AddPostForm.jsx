import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { useState } from 'react';
import { addPost } from '../store/reducers/postsReducer';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    const handleSavePost = () => {
        if (title && content) {
            const model = {
                id: nanoid(),
                title,
                content,
            };

            console.log(model);
            dispatch(addPost(model));

            setTitle('');
            setContent('');
        }
    };

    return (
        <div>
            <div>
                <p>Add a new post please</p>
            </div>
            <Input value={title} setValue={setTitle} name={'Set name'}></Input>
            <Input value={content} setValue={setContent} name={'Set last name'}></Input>
            <Button handleSavePost={handleSavePost}></Button>
        </div>
    );
};

export default AddPostForm;
