import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContextProv';
import { Navigate } from 'react-router';

function RouterLock({ children }) {

  let { IsAutth } = useContext(AuthContext)

  if (!IsAutth) {
   return <Navigate to="/login" />
  }
  return (children)
}

export default RouterLock