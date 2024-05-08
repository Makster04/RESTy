import React from 'react';
import './Results.scss';

interface ResultsProps {
  data: { count: number; results: Array<{ name: string; url: string }> } | null; // Define prop types
}

const Results: React.FC<ResultsProps> = ({ data }) => { // Convert Results to a functional component
  return (
    <div className="results">
      {data ? (
        <>
          <div>Count: {data.count}</div>
          <div>
            Results:
            <ul>
              {data.results.map((item, index) => (
                <li key={index}>
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Results;


{/* import React from 'react';

class Results extends React.Component {
  render() {
    return (
      <section>
        <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
      </section>
    );
  }
}

export default Results;
 */}
