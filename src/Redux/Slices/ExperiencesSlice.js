import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const experiencesUrl = 'http://127.0.0.1:3000/api/v1/experiences';

const initialState = {
  experiences: [],
  status: 'idle',
  error: null,
};

export const getExperiencesData = createAsyncThunk(
  'experiences/getExperiencesData',
  async () => {
    try {
      const response = await axios.get(experiencesUrl);
      return response.data;
    } catch (error) {
      return 'Please try again, something went wrong';
    }
  },
);

// CREADA PARA TESTEAR EL FEATURE
export const createExperience = () => {
  console.log('Tests');
};

const experiencesSlice = createSlice({
  name: 'experiences',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getExperiencesData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getExperiencesData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.experiences = action.payload;
      })
      .addCase(getExperiencesData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default experiencesSlice.reducer;
