import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './reducers/postsReducer';
import usersReducer from './reducers/usersReducer';
import todoReducer from './reducers/todoReducer';
import { apiSlice } from './api/apiReducer';

export const store = configureStore({
    reducer: {
        postsReducer,
        usersReducer,
        todoReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },

    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
});
