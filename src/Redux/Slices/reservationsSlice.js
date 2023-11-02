import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'http://localhost:3000/api/v1/users';

const initialState = {
  reservations: [],
  loading: false,
  error: null,
};

export const getUserReservations = createAsyncThunk('reservations/getUserReservations', async (userID) => {
  try {
    const response = await axios.get(`${baseURL}/${userID}/reservations`);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const createReservation = createAsyncThunk('reservations/createReservation', async (data) => {
  try {
    const response = await axios.post(`${baseURL}/${data.user_id}/reservations`, data);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const deleteReservation = createAsyncThunk('reservations/deleteReservation', async (data) => {
  try {
    const response = await axios.delete(`${baseURL}/${data.user_id}/reservations/${data.id}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUserReservations.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserReservations.fulfilled, (state, action) => {
        state.loading = false;
        state.reservations = action.payload;
      })
      .addCase(getUserReservations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(createReservation.pending, (state) => {
        state.loading = true;
      })
      .addCase(createReservation.fulfilled, (state, action) => {
        state.loading = false;
        if (!action.payload?.errors) {
          state.error = 'Failed to sign up';
        } else {
          state.reservations.push(action.payload);
        }
      })
      .addCase(createReservation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(deleteReservation.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteReservation.fulfilled, (state, action) => {
        state.loading = false;
        state.reservations = state.reservations.filter(
          (reservation) => reservation.id !== action.payload.id,
        );
      })
      .addCase(deleteReservation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default reservationsSlice.reducer;
