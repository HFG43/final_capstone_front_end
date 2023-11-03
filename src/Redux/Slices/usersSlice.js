import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const usersUrl = 'http://localhost:3000/api/v1/users/';

const initialState = {
  user: { id: null, name: null, username: null },
  loading: false,
  status: 'idle',
  error: null,
};

export const validateUser = createAsyncThunk('users/validateUser', async (name) => {
  try {
    const response = await axios.get(`${usersUrl}${name}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const createUser = createAsyncThunk('users/createUser', async (user) => {
  try {
    const response = await axios.post(`${usersUrl}`, user);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(validateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(validateUser.fulfilled, (state, action) => {
        state.loading = false;

        if (action.payload.exist) {
          state.status = 'Authenticated';
          state.user.id = action.payload.id;
          state.user.name = action.payload.name;
          state.user.username = action.payload.username;
        } else {
          state.status = 'User not found';
        }
      })
      .addCase(validateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Create the user
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;

        if (typeof action.payload === 'string') {
          state.status = 'Failed to sign up';
        } else {
          state.status = 'created';
        }
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
