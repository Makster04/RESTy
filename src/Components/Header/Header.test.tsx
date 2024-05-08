import React from 'react';
import { render } from '@testing-library/react';
import Header from './index';

// Test to check if Header component renders correctly
test('renders Header component', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/RESTy/i); // Finding the text 'RESTy' in the rendered component
  expect(linkElement).toBeInTheDocument(); // Asserting that the text 'RESTy' is present in the rendered component
});
