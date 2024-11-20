// src/PrivateRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    // Redirect unauthenticated users to the sign-in page
    return <Navigate to="/sign-in" replace />;
  }

  // Render the children components if the user is authenticated
  return children;
};

export default PrivateRoute;
