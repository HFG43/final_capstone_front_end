import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
// import experiencesReducer from './Experienceslice/ExperiencesSlice';
// import reservationsReducer from './ReservationsSlice/ReservationsSlice';
import usersSliceReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    // experiences: experiencesReducer,
    // reservations: reservationsReducer,
    users: usersSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
