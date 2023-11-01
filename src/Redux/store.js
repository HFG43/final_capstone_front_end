import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import usersReducer from './users/usersSlice';
import experiencesReducer from './ExperiencesSlice/ExperiencesSlice';
// import reservationsReducer from './ReservationsSlice/ReservationsSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    experiences: experiencesReducer,
    // reservations: reservationsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
