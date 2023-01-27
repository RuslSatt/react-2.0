import React from 'react';
import Input from '../components/Input';

const Registration = () => {
    return (
        <div>
            <Input name={'Set name'}></Input>
            <Input name={'Set last name'}></Input>
            <Input name={'Set email'}></Input>
            <Input name={'Set phone'}></Input>
        </div>
    );
};

export default Registration;
