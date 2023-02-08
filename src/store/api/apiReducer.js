import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500/' }),
    tagTypes: ['Post'],
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => '/posts',
            providesTags: ['Post'],
        }),
        addPost: builder.query({
            query: post => ({
                url: '/posts',
                method: 'POST',
                body: post,
            }),
        }),
        updatePost: builder.query({
            query: post => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: post,
            }),
        }),
        deletePost: builder.query({
            query: id => ({
                url: `/posts/${id}`,
                method: 'DELETE',
                body: id,
            }),
        }),
    }),
});

export const { useGetPostsQuery, useAddPostQuery, useUpdatePostQuery, useDeletePostQuery } =
    apiSlice;
