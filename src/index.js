// index.js
// index.js
// Add this line
// ...rest of your imports

import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line
import './custom.css'; 
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();