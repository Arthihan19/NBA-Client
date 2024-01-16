import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../Authentication/slice/selectors';
import { Spinner } from '../Spinner';
import styled from 'styled-components/macro';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useSelector(selectUser);

  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      setInitialLoading(false);
    }
  }, [loading]);

  if (initialLoading || loading) {
    return (
      <LoadingWrapper>
        <Spinner />
        <LoadingText>Loading...</LoadingText>
      </LoadingWrapper>
    );
  }

  const isAuthenticated = user !== null;
  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
`;

const LoadingText = styled.span`
  margin-top: 20px;
  font-size: 1.2rem;
  color: #666;
`;
