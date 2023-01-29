import { createSlice, createAsyncThunk } from '@reduxjs/toolkit/dist';
import axios from 'axios';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const initialState = {
    users: [],
    status: 'idle',
    error: null,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await axios.get(USERS_URL);
        return [...response.data];
    } catch (err) {
        return err.message;
    }
});

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = state.users.concat(action.payload);
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.error = action.error.message;
            });
    },
});

export const allUsers = state => state.usersReducer.users;

export default usersSlice.reducer;
