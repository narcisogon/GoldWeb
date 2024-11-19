// PrivateRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

function PrivateRoute({ children }) {
  const { currentUser } = useContext(AuthContext);

  if (currentUser === undefined) {
    // Auth state is still loading
    return null; // Or a loading spinner
  }

  return currentUser ? children : <Navigate to="/sign-in" />;
}

export default PrivateRoute;
