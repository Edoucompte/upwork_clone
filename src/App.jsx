import UserNotFoundPage from './pages/UserNotFoundPage'
import './App.css'
import Signup from './pages/Signup'
import SignupStep2 from './pages/SignupStep2'
import AdressePage from './pages/AdressePage'
import Experiencepage from './pages/Experiencepage'
import ExperienceForm from './components/ExperienceForm'
import CompetencePage from './pages/CompetencePage'

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
      
      
    </>
  )
}

export default App
