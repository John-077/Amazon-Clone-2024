import React, { useContext, useEffect } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import { StateContext } from '../DataProvider/DataProvider';

const ProtectedRoute = ({children, msg, redirect})=> {
    const navigate = useNavigate();
    const [{user}, dispatch] = useContext(StateContext);
    useEffect(()=> {
        if (!user) {
            navigate("/login", {state: {msg, redirect}})
        }
    }, [user])
  return  children
}

export default ProtectedRoute
