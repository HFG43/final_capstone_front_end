import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
// import experiencesReducer from './Experienceslice/ExperiencesSlice';
// import reservationsReducer from './ReservationsSlice/ReservationsSlice';

const store = configureStore({
  reducer: {
    // experiences: experiencesReducer,
    // reservations: reservationsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
