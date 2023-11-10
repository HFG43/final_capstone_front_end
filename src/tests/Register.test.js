import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { initialStore } from '../assets/helpers/mockStore';
import Register from '../Components/Register';

describe('The Register component', () => {
  test('should render correctly into the DOM', async () => {
    const { registerComponent } = render(
      <MemoryRouter>
        <Provider store={initialStore}>
          <Register />
        </Provider>
      </MemoryRouter>,
    );
    expect(registerComponent).toMatchSnapshot();
  });
});
