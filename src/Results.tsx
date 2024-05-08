import React from 'react';

interface ResultsProps {
  requestParams: { method?: string; url?: string }; // Define requestParams prop
}

const Results: React.FC<ResultsProps> = ({ requestParams }) => {
  return (
    <div>
      <h2>Request Summary</h2>
      <div>Method: {requestParams.method}</div> {/* Display selected method */}
      <div>URL: {requestParams.url}</div> {/* Display entered URL */}
      {/* Display results separately */}
      <h2>Response Headers</h2>
      <pre>{JSON.stringify({ 'Content-Type': 'application/json' }, null, 2)}</pre>
      <h2>Response Body</h2>
      <pre>{JSON.stringify({ message: 'Mocked data' }, null, 2)}</pre>
    </div>
  );
};

export default Results;
