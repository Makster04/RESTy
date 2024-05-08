import React, { useState } from 'react';

interface FormProps {
  onSubmit: (formData: { method: string; url: string }) => void; // Define onSubmit prop function
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<{ method: string; url: string }>({ method: 'get', url: '' }); // Using useState hook for form state management

  const handleMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, method: e.target.value }); // Update method in form state
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, url: e.target.value }); // Update URL in form state
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData); // Call onSubmit function with form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="method">Method:</label>
        <select id="method" value={formData.method} onChange={handleMethodChange}>
          <option value="get">GET</option>
          <option value="post">POST</option>
          <option value="put">PUT</option>
          <option value="delete">DELETE</option>
        </select>
      </div>
      <div>
        <label htmlFor="url">URL:</label>
        <input type="text" id="url" value={formData.url} onChange={handleUrlChange} />
      </div>
      <button type="submit">Go</button>
    </form>
  );
};

export default Form;
