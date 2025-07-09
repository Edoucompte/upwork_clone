import React from 'react'
import { Outlet } from 'react-router-dom'
/* import Signup from './pages/Signup'
import SpecialitePage from './pages/SpecialitePage'
import SignupStep3 from './pages/SignupStep3'
import FonctionPage from './pages/FonctionPage'
import ExperiencePage from './pages/ExperiencePage_'
import AdressePage from './pages/AdressePage'
import Experiencepage from './pages/Experiencepage'

import CompetencePage from './pages/CompetencePage'
import EducationPage from './pages/EducationPage'
import LanguePage from './pages/LanguePage'
import BienvenuePage from './pages/BienvenuePage'
import TypeFreelancerPage from './pages/TypeFreelancerPage'
import ObjectifPage from './pages/ObjectifPage'
import TypeTravailPage from './pages/TypeTravailPage'
import DebutProfilPage from './pages/DebutProfilPage'
import EmailVerifyPage from './pages/EmailVerifyPage' */
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SignupNavbar from '../components/signup/SignupNavbar'

const FreeleancerLayout = () => {
  return (
    <>
    <SignupNavbar/>
       <Outlet/>    
    <Footer />  
    </>
  )
}

export default FreeleancerLayout