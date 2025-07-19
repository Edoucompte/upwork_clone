import React from 'react'
import { Outlet } from 'react-router-dom'

import SignupNavbar from '../components/signup/SignupNavbar'

const Login = () => {
  return (
    <>
    <SignupNavbar/>
       <Outlet/>    
    </>
  )
}

export default Login