import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
    posts: [],
    status: 'idle',
    error: null,
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
            });
    },
});

export const allPosts = state => state.postsReducer.posts;
export const getPostsStatus = state => state.postsReducer.status;
export const getPostsError = state => state.postsReducer.error;

export const { addPost, addReaction } = postsSlice.actions;

export default postsSlice.reducer;
