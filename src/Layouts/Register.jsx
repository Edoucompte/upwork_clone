import React from 'react'
import { Outlet } from 'react-router-dom'

import SignupNavbar from '../components/signup/SignupNavbar'

const Register = () => {
  return (
    <>
    <SignupNavbar/>
       <Outlet/>    
    </>
  )
}

export default Register