import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import ExperienceIncluded from '../Components/ExperienceIncluded';

describe('The ExperienceIncluded component', () => {
  test('should render correctly into the DOM', async () => {
    const details = 'This is a testing details data';
    const media = 'desktop';

    const { experienceIncludedComponent } = render(
      <ExperienceIncluded mediaStyles={media} detailsIncluded={details} />,
    );
    expect(experienceIncludedComponent).toMatchSnapshot();
  });

  test('should render correctly the experience details', async () => {
    const details = 'This is a testing details data';
    const media = 'desktop';

    render(
      <ExperienceIncluded mediaStyles={media} detailsIncluded={details} />,
    );

    const expectedResult = screen.getByText(/This is a testing details data/i);

    expect(expectedResult).toBeInTheDocument();
  });
});
