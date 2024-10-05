import React, { useContext, useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
import { StateContext } from '../DataProvider/DataProvider';

const ProtectedRoute = ({children, msg, redirect})=> {
    const navigate = useNavigate();
    const [{user}] = useContext(StateContext);
    useEffect(()=> {
        if (!user) {
            navigate("/login", {state: {msg, redirect}})
        }
    }, [])
  return  children
}

export default ProtectedRoute
