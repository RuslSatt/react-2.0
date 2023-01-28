import { createSlice } from '@reduxjs/toolkit/dist';

const initialState = [
    { id: '1', name: 'Rolan' },
    { id: '2', name: 'Oleg' },
    { id: '3', name: 'Angel' },
];

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
});

export const allUsers = state => state.usersReducer;

export default usersSlice.reducer;
