import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { initialStore } from '../assets/helpers/mockStore';
import LoginPage from '../Components/LoginPage';

describe('The Login page component', () => {
  test('should render correctly into the DOM', async () => {
    const { loginPageComponent } = render(
      <MemoryRouter>
        <Provider store={initialStore}>
          <LoginPage />
        </Provider>
      </MemoryRouter>,
    );
    expect(loginPageComponent).toMatchSnapshot();
  });
});
