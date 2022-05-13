import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

export const AuthRoute = ({children}) => {
  const { user } = useSelector(state => state.user);
  if (!user) {
    return <Navigate to="/unauthorized" />;
  }
  return children;
}