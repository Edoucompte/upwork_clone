
import './App.css'

/*import UserNotFoundPage from './pages/UserNotFoundPage' 
import Signup from './pages/Signup'
import SpecialitePage from './pages/SpecialitePage'
import SignupStep3 from './pages/SignupStep3'
import FonctionPage from './pages/FonctionPage'
import AdressePage from './pages/AdressePage'
import CompetencePage from './pages/CompetencePage'
import EducationPage from './pages/EducationPage'
import LanguePage from './pages/LanguePage'
import BienvenuePage from './pages/BienvenuePage'
import TypeFreelancerPage from './pages/TypeFreelancerPage'
import ObjectifPage from './pages/ObjectifPage'
import TypeTravailPage from './pages/TypeTravailPage'
import DebutProfilPage from './pages/DebutProfilPage'
import EmailVerifyPage from './pages/EmailVerifyPage' */
import { Route, Routes } from 'react-router-dom'
import React from 'react'

import { BrowserRouter } from 'react-router-dom'
//import Experiencepage from './pages/Experiencepage'
import SkillSuggestion from './components/SkillSuggestion'
import TypeFreelancerPage from './pages/TypeFreelancerPage'
import TypeTravailPage from './pages/TypeTravailPage'
import ObjectifPage from './pages/ObjectifPage'
import DebutProfilPage from './pages/DebutProfilPage'
import SpecialitePage from './pages/SpecialitePage'
import FonctionPage from './pages/FonctionPage'
import AdressePage from './pages/AdressePage'
import EducationPage from './pages/EducationPage'
//import ExperiencePageB from './pages/ExperiencePageB'
import CompetencePageA from './pages/CompetencePageA'
import LanguePage from './pages/LanguePage'
import BienvenuePage from './pages/BienvenuePage'
import ProfilEntier from './pages/ProfilEntier'
import ExperiencePage from './pages/ExperiencePage'
import Signup from './pages/Signup'

import FreelancerOrClientPage from './pages/FreelancerOrClientPage'
import LoginStep1 from './pages/login/loginSpep1'
import LoginStep2 from './pages/login/loginStep2'
import Register from './Layouts/Register'
import Login from './Layouts/Login'
import Dashbord from './Layouts/Dashbord'
import BioPage from './pages/BioPage'
import TauxPage from './pages/TauxPage'


function App() {

  return (
   
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login /> }>
              <Route index  element={<LoginStep1/>} />
              <Route path="password/:usernameOrEmail" element={<LoginStep2 />} />
               
        </Route>
               
              
        <Route path="/register" element={<Register/>} >
              <Route  index  element={<FreelancerOrClientPage />} /> 
              <Route path="role/:selectedOption" element={<Signup />} /> 
              <Route path="type-travail" element={<TypeTravailPage/>} />
              <Route path="skill-suggestion" element={<SkillSuggestion />} />
              <Route path="objectif" element={<ObjectifPage />} />
              <Route path="debut-profil" element={<DebutProfilPage />} />
              <Route path="specialite" element={<SpecialitePage />} /> 
              <Route path="experience" element={<ExperiencePage />} />
              <Route path="education" element={<EducationPage/>} />
              <Route path="adresse" element={<AdressePage />} />
              <Route path="titre-profil" element={<FonctionPage />} /> 
              <Route path="competence" element={<CompetencePageA />} />
              <Route path="langue" element={<LanguePage />} /> 
              <Route path="bienvenue" element={<BienvenuePage />} /> 
              <Route path="taux" element={<TauxPage />} /> 
              <Route path="bio" element={<BioPage/>} /> 
              <Route path='type-freelance' element={<TypeFreelancerPage />} />
               
        </Route>
          
        <Route path="/dashbord" element={<Dashbord/>} >
              <Route index  element={<div>Dashboard</div>} />   
              
              <Route path="profil" element={<ProfilEntier />} />
              
              
          </Route>
          


      </Routes>
   </BrowserRouter>
        
     
  )
}

export default App
