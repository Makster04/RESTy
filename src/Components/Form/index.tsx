import React, { useState } from 'react';
import './Form.scss';

interface FormProps {
  handleApiCall: (requestParams: { method: string; url: string }) => void; // Define prop types
}

const Form: React.FC<FormProps> = ({ handleApiCall }) => { // Convert Form to a functional component
  const [method, setMethod] = useState<string>('get'); // Use useState for method
  const [url, setUrl] = useState<string>(''); // Use useState for URL

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleApiCall({ method: 'GET', url: 'https//pokeapi.co/api/v2/pokemon' }); // Call handleApiCall function with method and URL
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Method: GET
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="get">GET</option>
          <option value="post">POST</option>
          <option value="put">PUT</option>
          <option value="delete">DELETE</option>
        </select>
      </label>
      <label>
        URL: https://pokeapi.co/api/v2/pokemon 
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      </label>
      <button type="submit">Go</button>
    </form>
  );
};

export default Form;


{/* import React from 'react';

import './Form.scss';

class Form extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method:'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    this.props.handleApiCall(formData);
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' />
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <span id="get">GET</span>
            <span id="post">POST</span>
            <span id="put">PUT</span>
            <span id="delete">DELETE</span>
          </label>
        </form>
      </>
    );
  }
}

export default Form;
 */}
