import React from 'react';
// import ReactDOM from 'react-dom/client'; // V 17
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// V 17
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode> {/* Strict mode adds checks for old deprecated code.  */}
//     <App />
//   </React.StrictMode>
// );

// V 18
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React.StrictMode is a way to not use deprecated files / elements. Renders components twice to catch any anomalies. 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
