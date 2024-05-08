import React, { useState } from 'react';
import './Form.scss';

interface FormProps {
  handleApiCall: (requestParams: { method: string; url: string }) => void; // Define prop types
}

const Form: React.FC<FormProps> = ({ handleApiCall }) => { // Convert Form to a functional component
  // State variables for method and URL, initialized with default values
  const [method, setMethod] = useState<string>('get'); // Use useState for method
  const [url, setUrl] = useState<string>(''); // Use useState for URL

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Call the handleApiCall function with method and URL parameters
    handleApiCall({ method: 'GET', url: 'https//pokeapi.co/api/v2/pokemon' }); // Call handleApiCall function with method and URL
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Method selection input */}
      <label>
        Method: GET
        {/* Method select dropdown, controlled by state */}
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="get">GET</option>
          <option value="post">POST</option>
          <option value="put">PUT</option>
          <option value="delete">DELETE</option>
        </select>
      </label>
      {/* URL input */}
      <label>
        URL: https://pokeapi.co/api/v2/pokemon 
        {/* URL input field, controlled by state */}
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      </label>
      {/* Form submission button */}
      <button type="submit">Go</button>
    </form>
  );
};

export default Form;
