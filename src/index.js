import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Covid from './components/covid';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
     <Covid />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
