import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: '1', title: 'Learning Redux Toolkit', content: 'I have heard good things' },
    { id: '2', title: 'Slices...', content: 'The more I say slice, the more I want pizza' },
];

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost(state, action) {
            state.push(action.payload);
        },
        deletePost() {},
    },
});

export const allPosts = state => state.postsReducer;

export const { addPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
