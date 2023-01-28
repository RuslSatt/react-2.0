import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const initialState = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: 'I have heard good things',
        userId: '1',
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        },
    },
    {
        id: '2',
        title: 'Slices...',
        content: 'The more I say slice, the more I want pizza',
        userId: '2',
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        },
    },
];

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: {
            reducer(state, action) {
                state.push(action.payload);
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
            const existPost = state.find(post => post.id === postId);
            if (!existPost) return;
            existPost.reactions[reaction]++;
        },
    },
});

export const allPosts = state => state.postsReducer;

export const { addPost, addReaction } = postsSlice.actions;

export default postsSlice.reducer;
