// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthProvider from './AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css'; // If you have custom styles
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
