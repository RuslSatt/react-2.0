import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { useState } from 'react';
import { addNewPost, editPost } from '../store/reducers/postsReducer';
import { useDispatch, useSelector } from 'react-redux';
import { allUsers } from '../store/reducers/usersReducer';
import { useNavigate } from 'react-router-dom';

const PostFromPage = ({ post }) => {
    const [title, setTitle] = useState(post?.title || '');
    const [content, setContent] = useState(post?.content || '');
    const [userId, setUserId] = useState(post?.userId || '');

    const users = useSelector(allUsers);
    const navigate = useNavigate();

    const usersList = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

    const dispatch = useDispatch();

    const handleSavePost = () => {
        if (title && content && userId) {
            dispatch(addNewPost({ title, content, userId }));

            resetState();
        }
    };

    const handleEditPost = () => {
        const editedPost = {
            id: Number(post.id),
            title,
            content,
            userId,
            reactions: post.reactions,
        };

        dispatch(editPost(editedPost));
        resetState();
        navigate(`/post/${post.id}`);
    };

    function resetState() {
        setTitle('');
        setContent('');
        setUserId('');
    }

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
            {!post ? (
                <Button text={'Save'} handleStatePost={handleSavePost} />
            ) : (
                <Button text={'Edit'} handleStatePost={handleEditPost} />
            )}
        </div>
    );
};

export default PostFromPage;
