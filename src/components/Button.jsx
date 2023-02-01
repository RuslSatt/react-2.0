import React from 'react';

const Button = ({ handleStatePost, text }) => {
    return (
        <>
            <button onClick={handleStatePost}>{text}</button>
        </>
    );
};

export default Button;
