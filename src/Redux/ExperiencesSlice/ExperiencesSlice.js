import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getExperiencesUrl = 'TO BE DEFINED';
const postExperienceUrl = 'TO BE DEFINED';

const initialState = {
  experiences: [],
  status: 'idle',
  error: null,
};

export const getExperiencesData = createAsyncThunk(
  'experiences/getExperiencesData',
  async () => {
    try {
      const response = await axios.get(getExperiencesUrl);
      return response.data;
    } catch (error) {
      return 'Please try again, something went wrong';
    }
  },
);

export const addNewExperience = createAsyncThunk(
  'experiences/addNewExperince',
  async (newExperience) => {
    try {
      const response = await axios.post(postExperienceUrl, newExperience);
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
);

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
      })
      .addCase(addNewExperience.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.experiences.push(action.payload);
      });
  },
});

export default experiencesSlice.reducer;
