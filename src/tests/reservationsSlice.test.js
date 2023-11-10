import { reservationsFetchMockData, reservationsData, reservationsMockData } from '../assets/helpers/mockStore';
import reservationsReducer, { getUserReservations } from '../Redux/Slices/reservationsSlice';

describe('Test reservationsSlice', () => {
  test('Initial state', () => {
    const initialState = reservationsReducer(undefined, {});
    expect(initialState).toEqual({
      currentReservations: [],
      loading: false,
      error: null,
    });
  });
  test('When the app finishes loading the Reservations it has the following information', () => {
    const fulfilledState = reservationsReducer(reservationsMockData, {
      type: getUserReservations.fulfilled,
      payload: reservationsFetchMockData,
    });
    expect(fulfilledState.reservations).toEqual(reservationsData);
    expect(fulfilledState.error).toBe(null);
  });
});
