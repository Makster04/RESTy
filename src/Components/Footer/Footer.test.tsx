import React from 'react';
import { render } from '@testing-library/react';
import Footer from './index';
import { test } from '@jest/globals'; // Import test function

test('renders Footer component', () => {
  const { getByText } = render(<Footer />);
  const linkElement = getByText(/2018/i); // Finding the text '2018' in the rendered component
  expect(linkElement).toBeInTheDocument(); // Asserting that the text '2018' is present in the rendered component
});

// contracts -> agreement between 2 parties
// Component is 1 party, the user is the other.
// Form: accept inputs, calls a function to make a request.