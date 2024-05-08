import React from 'react';
import { render } from '@testing-library/react';
import Results from './index';
import { test } from '@jest/globals'; // Import test function

test('renders Results component with loading state', () => {
  const { getByText } = render(<Results data={null} />);
  const loadingElement = getByText(/Loading.../i); // Finding the text 'Loading...' in the rendered component
  expect(loadingElement).toBeInTheDocument(); // Asserting that the text 'Loading...' is present in the rendered component
});

// Test to check if Results component renders data correctly
test('renders Results component with data', () => {
  // Mock data
  const fakeData = {
    count: 2,
    results: [
      { name: 'fake thing 1', url: 'http://fakethings.com/1' },
      { name: 'fake thing 2', url: 'http://fakethings.com/2' },
    ],
  };
  const { getByText } = render(<Results data={fakeData} />);
  const countElement = getByText(/Count: 2/i); // Finding the text 'Count: 2' in the rendered component
  const resultElement1 = getByText(/fake thing 1/i); // Finding the text 'fake thing 1' in the rendered component
  const resultElement2 = getByText(/fake thing 2/i); // Finding the text 'fake thing 2' in the rendered component
  // Asserting that the text 'Count: 2', 'fake thing 1', and 'fake thing 2' are present in the rendered component
  expect(countElement).toBeInTheDocument();
  expect(resultElement1).toBeInTheDocument();
  expect(resultElement2).toBeInTheDocument();
});
