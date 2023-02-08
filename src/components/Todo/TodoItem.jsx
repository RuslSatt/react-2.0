import React from 'react';
// import { useRemoveTodoMutation, useUpdateTodoMutation } from '../../store/api/apiReducer';

const TodoItem = ({ item }) => {
    const [deleteItem] = useRemoveTodoMutation();
    const [updateItem] = useUpdateTodoMutation();

    const handleDelete = () => {
        deleteItem(item.id);
    };

    const handleUpdate = () => {
        const updatedItem = { ...item, completed: !item.completed };
        updateItem(updatedItem);
    };

    return (
        <li className="flex items-center justify-start border w-96 h-16 gap-5 text-left p-10">
            <input
                type="checkbox"
                name="check"
                id={item.id}
                checked={item.completed}
                onChange={handleUpdate}
            />
            <p className="flex-grow">{item.title}</p>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
};

export default TodoItem;
