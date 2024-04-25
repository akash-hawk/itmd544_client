import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {
  const userId = localStorage.getItem('userId');

  if (!userId) {
    return <Navigate to="/signin" />;
  }

  return <Route {...rest} element={element} />;
};

export default ProtectedRoute;