import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
    posts: [],
    status: 'idle',
    error: null,
    isLoading: false,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    try {
        const response = await axios.get(POSTS_URL);
        return [...response.data];
    } catch (e) {
        return e.message;
    }
});

export const addNewPost = createAsyncThunk('posts/addNewPost', async initialPost => {
    try {
        const response = await axios.post(POSTS_URL, initialPost);
        return response.data;
    } catch (err) {
        return err.message;
    }
});

export const editPost = createAsyncThunk('posts/editPost', async initialPost => {
    try {
        const response = await axios.put(`${POSTS_URL}/${initialPost.id}`, initialPost);
        return response.data;
    } catch (err) {
        return err.message;
    }
});

export const deletePost = createAsyncThunk('posts/deletePost', async postId => {
    try {
        const response = await axios.delete(`${POSTS_URL}/${postId}`);
        if (response?.status === 200) return postId;
        return `${response.status}: ${response.statusText}`;
    } catch (err) {
        return err.message;
    }
});

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addReaction(state, action) {
            const { postId, reaction } = action.payload;
            const existPost = state.posts.find(post => post.id === postId);
            if (!existPost) return;
            existPost.reactions[reaction]++;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';

                const loadedPosts = action.payload.map(model => {
                    model.reactions = {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0,
                    };
                    return model;
                });

                state.posts = state.posts.concat(loadedPosts);
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = 'failed';
            })
            .addCase(addNewPost.fulfilled, (state, action) => {
                action.payload.userId = Number(action.payload.userId);
                action.payload.reactions = {
                    thumbsUp: 0,
                    wow: 0,
                    heart: 0,
                    rocket: 0,
                    coffee: 0,
                };
                state.posts.push(action.payload);
            })
            .addCase(editPost.fulfilled, (state, action) => {
                action.payload.userId = Number(action.payload.userId);
                const { id } = action.payload;
                const posts = state.posts.filter(post => post.id !== id);
                state.posts = [...posts, action.payload];
                state.isLoading = false;
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                const id = action.payload;
                state.posts = state.posts.filter(post => post.id !== id);
                state.isLoading = false;
            });
    },
});

export const allPosts = state => state.postsReducer.posts;
export const getPostsStatus = state => state.postsReducer.status;
export const getPostsError = state => state.postsReducer.error;

export const getPostById = (state, id) => {
    return state.postsReducer.posts.find(post => post.id.toString() === id);
};

export const getPostsByUser = createSelector(
    [allPosts, (state, userId) => userId],
    (posts, userId) => posts.filter(post => post.userId === userId)
);

export const { addReaction } = postsSlice.actions;

export default postsSlice.reducer;
