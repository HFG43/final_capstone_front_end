import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getExperiencesUrl = 'https://jsonplaceholder.typicode.com/posts';
const postExperienceUrl = 'xxxx';

const initialState = {
  experiences: [],
  status: 'idle',
  error: null,
};

const experiencesFetched = (experiences) => {
  const experiencesList = experiences.map((experience) => ({
    experience_id: experience.id,
    experience_name: experience.name,
    experience_photo: experience.photo,
    experience_description: experience.description,
    experience_fee: experience.experience_fee,
    experience_testing_fee: experience.add_testing_fee,
    experience_reserve_full_table: experience.reserve_full_table,
    experience_guests: experience.guests,
  }));
  return experiencesList;
};

export const getExperiencesData = createAsyncThunk(
  'experiences/getExperiencesData',
  async () => {
    try {
      const response = await axios.get(getExperiencesUrl);
      console.log(response);
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
      return response.data
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
        state.experiencesData = action.payload;
      })
      .addCase(getExperiencesData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewExperience.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = action.error.message;
      });
  },
});

export default experiencesSlice.reducer;
