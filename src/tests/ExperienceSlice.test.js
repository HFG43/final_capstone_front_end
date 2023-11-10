import experiencesReducer, { getExperiencesData } from '../Redux/Slices/ExperiencesSlice';
import { experiencesFetchMockData, experiencesData, experienceMockData } from '../assets/helpers/mockStore';

describe('Test experiencesSlice', () => {
  test('Initial state', () => {
    const initialState = experiencesReducer(undefined, {});
    expect(initialState).toEqual({
      experiences: [],
      status: 'idle',
      error: null,
    });
  });
  test('When the app finishes loading the Experiences it has the following information', () => {
    const fulfilledState = experiencesReducer(experienceMockData, {
      type: getExperiencesData.fulfilled,
      payload: experiencesFetchMockData,
    });
    expect(fulfilledState.experiences).toEqual(experiencesData);
    expect(fulfilledState.error).toBe(null);
  });
});
