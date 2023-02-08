import React from 'react';
import TodoItem from '../../components/Todo/TodoItem';
import { useGetTodoQuery } from '../../store/api/apiReducer';

const TodoList = () => {
    const { data, error, isError, isLoading, isSuccess } = useGetTodoQuery();

    let content;

    if (isLoading) {
        content = <p>Loading...</p>;
    } else if (isSuccess) {
        content = data.map(todo => <TodoItem key={todo.id} item={todo} />);
    } else if (isError) {
        content = <p>Error... {error}</p>;
    }

    return <ul className="flex flex-col gap-4 justify-center items-center mt-5">{content}</ul>;
};

export default TodoList;
