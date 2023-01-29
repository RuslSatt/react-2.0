import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    status: 'idle',
    error: null,
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: {
            reducer(state, action) {
                state.posts.push(action.payload);
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0,
                        },
                    },
                };
            },
        },
        addReaction(state, action) {
            const { postId, reaction } = action.payload;
            const existPost = state.posts.find(post => post.id === postId);
            if (!existPost) return;
            existPost.reactions[reaction]++;
        },
    },
});

export const allPosts = state => state.postsReducer.posts;

export const { addPost, addReaction } = postsSlice.actions;

export default postsSlice.reducer;
