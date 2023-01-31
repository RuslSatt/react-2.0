import React from 'react';

const Button = ({ handleSavePost, handleEditPost, text }) => {
    return (
        <>
            <button onClick={handleSavePost || handleEditPost}>{text}</button>
        </>
    );
};

export default Button;
