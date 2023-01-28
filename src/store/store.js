import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './reducers/postsReducer';
import usersReducer from './reducers/usersReducer';

export const store = configureStore({
    reducer: {
        postsReducer,
        usersReducer,
    },
});
