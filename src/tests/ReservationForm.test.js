import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../assets/helpers/mockStore';
import ReservationForm from '../Components/ReservationForm';

jest.mock('../logic/getDate', () => ({
    __esModule: true,
    default: jest.fn(() => '2023-11-09T23:03:00.000Z'),
}));

test('RESERVATION FORM', () => {
  const tree = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/Experience1/1/new-reservation']}>
        <Routes>
          <Route path="/:experienceName/:experienceID/new-reservation" element={<ReservationForm />} />
        </Routes>
      </MemoryRouter>
    </Provider>,
  );

  expect(tree).toMatchSnapshot();
});