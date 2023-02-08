import React, { useState } from 'react';
import { useAddTodoMutation } from '../../store/api/apiReducer';

const AddItemPage = () => {
    const [value, setValue] = useState('');

    const [addTodo] = useAddTodoMutation();

    const handleSubmit = () => {
        const model = {
            userId: 1,
            title: value,
            completed: false,
        };
        addTodo(model);
        setValue('');
    };

    return (
        <form className="flex gap-5 items-center justify-center" onSubmit={e => e.preventDefault()}>
            <label htmlFor="add-todo"></label>
            <input
                type="text"
                name="new todo"
                id="new-todo"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button onClick={handleSubmit}>Add new item</button>
        </form>
    );
};

export default AddItemPage;
