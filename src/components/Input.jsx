import React, { useState } from 'react';

const Input = ({ name, value, setValue }) => {
    const changeValue = e => setValue(e.target.value);

    return (
        <div>
            <label htmlFor="input">{name}</label>
            <input className="input" value={value} onChange={changeValue} />
        </div>
    );
};

export default Input;
