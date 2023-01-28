import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReaction } from '../store/reducers/postsReducer';

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch();

    const types = {
        thumbsUp: '👍',
        wow: '😮',
        heart: '❤️',
        rocket: '🚀',
        coffee: '☕',
    };

    const handleClickOnEmoji = name => {
        dispatch(
            addReaction({
                postId: post.id,
                reaction: name,
            })
        );
    };

    const buttons = Object.entries(types).map(([name, emoji]) => {
        return (
            <button key={name} type="button" onClick={() => handleClickOnEmoji(name)}>
                {emoji} {post.reactions[name]}
            </button>
        );
    });

    return <div>{buttons}</div>;
};

export default ReactionButtons;
