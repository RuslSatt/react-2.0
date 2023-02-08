import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
    endpoints: builder => ({
        getTodo: builder.query({
            query: () => '/todo',
        }),
        addTodo: builder.mutation({
            query: todo => ({
                url: '/todo',
                method: 'POST',
                body: todo,
            }),
        }),
        updateTodo: builder.mutation({
            query: todo => ({
                url: `/todo/${todo.id}`,
                method: 'PATCH',
                body: todo,
            }),
        }),
        removeTodo: builder.mutation({
            query: id => ({
                url: `/todo/${id}`,
                method: 'DELETE',
                body: id,
            }),
        }),
    }),
});

export const { useGetTodoQuery, useAddTodoMutation, useUpdateTodoMutation, useRemoveTodoMutation } =
    apiSlice;
