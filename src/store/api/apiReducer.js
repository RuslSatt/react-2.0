import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
    tagTypes: ['Todo'],
    endpoints: builder => ({
        getTodo: builder.query({
            query: () => '/todo',
            transformResponse: res => res.sort((a, b) => b.id - a.id),
            providesTags: ['Todo'],
        }),
        addTodo: builder.mutation({
            query: todo => ({
                url: '/todo',
                method: 'POST',
                body: todo,
            }),
            invalidatesTags: ['Todo'],
        }),
        updateTodo: builder.mutation({
            query: todo => ({
                url: `/todo/${todo.id}`,
                method: 'PATCH',
                body: todo,
            }),
            invalidatesTags: ['Todo'],
        }),
        removeTodo: builder.mutation({
            query: id => ({
                url: `/todo/${id}`,
                method: 'DELETE',
                body: id,
            }),
            invalidatesTags: ['Todo'],
        }),
    }),
});

export const { useGetTodoQuery, useAddTodoMutation, useUpdateTodoMutation, useRemoveTodoMutation } =
    apiSlice;
