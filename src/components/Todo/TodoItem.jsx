import React from 'react';

const TodoItem = ({ item }) => {
    return (
        <li className="flex items-center justify-start border w-96 h-16 gap-5 text-left p-10">
            <input type="checkbox" name="check" id="check" defaultValue={item.completed} />
            <p>{item.title}</p>
        </li>
    );
};

export default TodoItem;
