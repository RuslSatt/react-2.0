import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducers/usersReducer';
import todoReducer from './reducers/todoReducer';
import { apiSlice } from './api/apiReducer';

export const store = configureStore({
    reducer: {
        usersReducer,
        todoReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },

    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
});
