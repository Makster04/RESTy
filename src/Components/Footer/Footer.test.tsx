import React from 'react';
import { render } from '@testing-library/react';
import Footer from './index';

// Test to check if Footer component renders correctly
test('renders Footer component', () => {
  const { getByText } = render(<Footer />);
  const linkElement = getByText(/2018/i); // Finding the text '2018' in the rendered component
  expect(linkElement).toBeInTheDocument(); // Asserting that the text '2018' is present in the rendered component
});

