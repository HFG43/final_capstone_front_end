import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const consultUser = createAsyncThunk('get/consultUser', async (name) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/users/${name}`);
    return response.data.exist;
  } catch (error) {
    return Promise.reject(error);
  }
});

const initialState = {
  user: null,
  userName: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { setUser, setUserName } = userSlice.actions;
export default userSlice.reducer;
