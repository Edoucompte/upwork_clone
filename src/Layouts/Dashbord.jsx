import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '../components/Footer'
import HeaderB from '../components/HeaderB'

const Dashbord = () => {
  return (
    <>
    <HeaderB/>
       <Outlet/>    
    <Footer />  
    </>
  )
}

export default Dashbord