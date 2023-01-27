import { configureStore } from '@reduxjs/toolkit';
import countSlice from './reducers/countSplice';

export const store = configureStore({
    reducer: {
        countSlice,
    },
});
