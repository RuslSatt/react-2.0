import React from 'react';
import AddItemPage from './AddItemPage';
import TodoList from './TodoList';

const Todo = () => {
    return (
        <div>
            <h2>Todo List</h2>
            <AddItemPage />
            <TodoList />
        </div>
    );
};

export default Todo;
