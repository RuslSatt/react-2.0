import React, { useState } from 'react';

const Input = ({ name }) => {
    const [value, setValue] = useState('');

    return (
        <div>
            <label htmlFor="input">{name}</label>
            <input className="input" value={value} onChange={e => setValue(e.target.value)} />
        </div>
    );
};

export default Input;
