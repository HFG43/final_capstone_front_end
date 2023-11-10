import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../assets/helpers/mockStore';
import Register from '../Components/Register';

test('REGISTRATION FORM', () => {
    const tree = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/Register']}>
          <Routes>
            <Route path="/Register" element={<Register />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });