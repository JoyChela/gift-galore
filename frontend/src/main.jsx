import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Link to App.jsx
import './index.css';     // Optional: Link to any global styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Make sure this matches your index.html
);
