import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders App component with child components', () => {
  const { getByText } = render(<App />);
  
  // Check if Header, Form, Results, and Footer components are rendered
  const headerElement = getByText(/RESTy/i);
  const formElement = getByText(/Method:/i);
  const resultsElement = getByText(/Results:/i);
  const footerElement = getByText(/2018/i);
  
  expect(headerElement).toBeInTheDocument();
  expect(formElement).toBeInTheDocument();
  expect(resultsElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();
});