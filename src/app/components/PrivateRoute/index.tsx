import React from 'react';
import { Navigate } from 'react-router-dom';
import { selectUser } from '../../Authentication/slice/selectors';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useSelector(selectUser);

  if (loading) {
    return <div>Loading...</div>;
  }

  const isAuthenticated = user !== null;

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
