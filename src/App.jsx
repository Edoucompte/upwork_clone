import UserNotFoundPage from './pages/UserNotFoundPage'
import './App.css'
import Signup from './pages/Signup'
import SignupStep2 from './pages/SignupStep2'
import AdressePage from './pages/AdressePage'
import Experiencepage from './pages/Experiencepage'

import CompetencePage from './pages/CompetencePage'
import EducationPage from './pages/EducationPage'
import LanguePage from './pages/LanguePage'
import BienvenuePage from './pages/BienvenuePage'
import TypeFreelancerPage from './pages/TypeFreelancerPage'

function App() {

  return (
    <>
    {/*  <UserNotFoundPage />
      
      */} 
      <Signup /> 
      <SignupStep2 />
      <AdressePage />
      <CompetencePage/>
     <Experiencepage /> 
     <EducationPage/> 
     <LanguePage />
     <BienvenuePage />
     <TypeFreelancerPage/>  
      
      
    </>
  )
}

export default App
