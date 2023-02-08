import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiReducer';

const initialState = {};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
});

export default todoSlice.reducer;
