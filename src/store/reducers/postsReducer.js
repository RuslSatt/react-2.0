import { createSelector } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiReducer';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const REACTIONS = {
    thumbsUp: 0,
    wow: 0,
    heart: 0,
    rocket: 0,
    coffee: 0,
};

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => '/posts',
            transformResponse: data => {
                return data.map(model => {
                    if (!model.reactions) {
                        model.reactions = REACTIONS;
                    }
                    return model;
                });
            },

            providesTags: ['Post'],
        }),
        getPostByUserId: builder.query({
            query: id => `/posts/${id}`,
            transformResponse: post => {
                return {
                    ...post,
                    reactions: REACTIONS,
                };
            },
        }),
        addPost: builder.mutation({
            query: post => ({
                url: '/posts',
                method: 'POST',
                body: {
                    ...post,
                    userId: Number(post.userId),
                    reactions: REACTIONS,
                },
            }),
        }),
        updatePost: builder.mutation({
            query: post => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: {
                    ...post,
                },
            }),
        }),
        deletePost: builder.mutation({
            query: ({ id }) => ({
                url: `/posts/${id}`,
                method: 'DELETE',
                body: { id },
            }),
        }),
        addReactions: builder.mutation({
            query: ({ postId, reactions }) => ({
                url: `/posts/${postId}`,
                method: 'PATCH',
                body: { reactions },
            }),
        }),
    }),
});

export const {
    useGetPostsQuery,
    useGetPostByUserIdQuery,
    useAddPostQuery,
    useUpdatePostQuery,
    useDeletePostQuery,
    useAddReactionsQuery,
} = extendedApiSlice;
