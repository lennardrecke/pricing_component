import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const elementBasic = screen.getByText(/Basic/i);
  const elementStandard = screen.getByText(/Standard/i);
  const elementPremium = screen.getByText(/Premium/i);

  expect(elementBasic).toBeInTheDocument();
  expect(elementStandard).toBeInTheDocument();
  expect(elementPremium).toBeInTheDocument();
});
