import UserNotFoundPage from './pages/UserNotFoundPage'
import './App.css'
import Signup from './pages/Signup'
import SignupStep2 from './pages/SignupStep2'
import SignupStep3 from './pages/SignupStep3'
import SignupStep4 from './pages/SignupStep4'
import SignupStep5 from './pages/SignupStep5'
import AdressePage from './pages/AdressePage'
import Experiencepage from './pages/Experiencepage'

import CompetencePage from './pages/CompetencePage'
import EducationPage from './pages/EducationPage'
import LanguePage from './pages/LanguePage'
import BienvenuePage from './pages/BienvenuePage'
import TypeFreelancerPage from './pages/TypeFreelancerPage'
import ObjectifPage from './pages/ObjectifPage'

function App() {

  return (
    <>
      {/* <UserNotFoundPage /> */}
      {/* <Signup /> */}
      {/* <SignupStep2 /> */}
      {/* <SignupStep3 /> */}
      {/* <SignupStep4 /> */}
      <SignupStep5/>
      <Signup /> 
      <SignupStep2 />
      <AdressePage />
      <CompetencePage/>
      <Experiencepage /> 
      <EducationPage/> 
      <LanguePage />
      <BienvenuePage />
      <TypeFreelancerPage/>  
      <ObjectifPage/>  

    </>
  )
}

export default App
