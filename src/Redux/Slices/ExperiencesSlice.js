import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const experiencesUrl = 'https://gourmet-experiences.onrender.com/api/v1/experiences';

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

export const createExperience = createAsyncThunk('experiences/createExperience', async (data) => {
  try {
    const response = await axios.post(experiencesUrl, data);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const deleteExperience = createAsyncThunk('experiences/deleteExperience', async (experienceID) => {
  try {
    const response = await axios.delete(`${experiencesUrl}/${experienceID}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

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

      // Create an experience
      .addCase(createExperience.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createExperience.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (action.payload?.errors) {
          state.error = 'Failed to create a new experience';
        } else {
          state.experiences.push(action.payload);
        }
      })
      .addCase(createExperience.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Delete an experience
      .addCase(deleteExperience.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteExperience.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.experiences = state.experiences.filter(
          (experience) => experience.id !== action.payload.id,
        );
      })
      .addCase(deleteExperience.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default experiencesSlice.reducer;
