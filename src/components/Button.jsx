import React from 'react';

const Button = ({ handleSavePost }) => {
    return (
        <>
            <button onClick={handleSavePost}>Button</button>
        </>
    );
};

export default Button;
