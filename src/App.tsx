import React, { useState } from 'react'; // Import useState hook
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

const App: React.FC = () => { // Convert App to a functional component
  const [requestData, setRequestData] = useState<{ method?: string; url?: string }>({}); // Use useState for request data
  const [responseData, setResponseData] = useState<{ count: number; results: Array<{ name: string; url: string }> } | null>(null); // Use useState for response data

  const callApi = (requestParams: { method: string; url: string }) => {
    // Mock API call with fake data
    const data = {
      count: 2,
      results: [
        { name: 'fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      ],
    };
    setResponseData(data); // Update response data using useState
    setRequestData(requestParams); // Update request data using useState
  };

  return (
    <>
      <Header />
      <div>Request Method: {requestData.method}</div>
      <div>URL: {requestData.url}</div>
      <Form handleApiCall={callApi} /> {/* Pass handleApiCall function to Form */}
      <Results data={responseData} /> {/* Pass response data to Results */}
      <Footer />
    </>
  );
};

export default App;


// // import React, { Component } from 'react';

// import './App.scss';

// // Let's talk about using index.js and some other name in the component folder.
// // There's pros and cons for each way of doing this...
// // OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// // Why is this source of truth beneficial when spread across a global organization?
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import Form from './Components/Form';
// import Results from './Components/Results';


// interface AppState {
//   data: {
//     count: number;
//     results: Array<{ name: string;  url: string }>;
//   } | null;
//   requestParams: {
//     method?: string;
//     url?: string;
//   };
// }


// class App extends Component<object, AppState> {

//   constructor(props: object) {
//     super(props);
//     this.state = {
//       data: null,
//       requestParams: {},
//     };
//   }

//   callApi = (requestParams: { method: string; url: string }) => {
//     // mock output
//     const data = {
//       count: 2,
//       results: [
//         {name: 'fake thing 1', url: 'http://fakethings.com/1'},
//         {name: 'fake thing 2', url: 'http://fakethings.com/2'},
//       ],
//     };
//     this.setState({ data, requestParams });
//   }

//   render() {
//     return (
//       <>
//         <Header />
//         <div>Request Method: {this.state.requestParams.method}</div>
//         <div>URL: {this.state.requestParams.url}</div>
//         <Form handleApiCall={this.callApi} />
//         <Results data={this.state.data} />
//         <Footer />
//       </>
//     );
//   }
// }

// export default App;


// //App.jsx
// // import React from 'react';

// // import './App.scss';

// // // Let's talk about using index.js and some other name in the component folder.
// // // There's pros and cons for each way of doing this...
// // // OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// // // Why is this source of truth beneficial when spread across a global organization?
// // import Header from './Components/Header';
// // import Footer from './Components/Footer';
// // import Form from './Components/Form';
// // import Results from './Components/Results';

// // class App extends React.Component {

// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       data: null,
// //       requestParams: {},
// //     };
// //   }

// //   callApi = (requestParams) => {
// //     // mock output
// //     const data = {
// //       count: 2,
// //       results: [
// //         {name: 'fake thing 1', url: 'http://fakethings.com/1'},
// //         {name: 'fake thing 2', url: 'http://fakethings.com/2'},
// //       ],
// //     };
// //     this.setState({data, requestParams});
// //   }

// //   render() {
// //     return (
// //       <React.Fragment>
// //         <Header />
// //         <div>Request Method: {this.state.requestParams.method}</div>
// //         <div>URL: {this.state.requestParams.url}</div>
// //         <Form handleApiCall={this.callApi} />
// //         <Results data={this.state.data} />
// //         <Footer />
// //       </React.Fragment>
// //     );
// //   }
// // }

// // export default App;
