import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getExperiencesUrl = 'https://jsonplaceholder.typicode.com/posts';
const postExperienceUrl = 'xxxx';

const initialstate = {
  experiencesData: [],
  status: 'idle',
  error: null,
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

export const teste = 'testeo';
