
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
import FreeleancerLayout from './Layouts/FreeleancerLayout'
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
import BioProfilPage from './pages/BioProfilPageS'
import TauxPaiePage from './pages/TauxPaiePageS'
import FreelancerOrClientPage from './pages/FreelancerOrClientPage'


function App() {

  return (
   
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FreeleancerLayout /> }>
              <Route index  element={<Signup/>} />
               <Route path="/signup/:selectedOption" element={<Signup />} /> 
               <Route path="/register" element={<FreelancerOrClientPage />} /> 
              <Route path="/bienvenue" element={<BienvenuePage />} /> 
              <Route path="/taux" element={<TauxPaiePage />} /> 
              <Route path="/bio" element={<BioProfilPage />} /> 
              <Route path='/type-freelance' element={<TypeFreelancerPage />} />
              <Route path="/profil" element={<ProfilEntier />} />
              <Route path="/type-travail" element={<TypeTravailPage/>} />
              <Route path="/skill-suggestion" element={<SkillSuggestion />} />
              <Route path="/objectif" element={<ObjectifPage />} />
              <Route path="/debut-profil" element={<DebutProfilPage />} />
              <Route path="/specialite" element={<SpecialitePage />} /> 
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/education" element={<EducationPage/>} />
             {/*  <Route path="/competence" element={<CompetencePage />} /> */}
              <Route path="/adresse" element={<AdressePage />} />
              <Route path="/titre-profil" element={<FonctionPage />} /> 
              <Route path="/competence" element={<CompetencePageA />} />
              <Route path="/langue" element={<LanguePage />} /> 
              {/* */}
              {/* */}
              {/*  */}
              {/* <Route path="/email-verify" element={<EmailVerifyPage />} /> */}
              {/*  */}
              {/* */}
              {/*  */}
              {/*  */}
              {/*  */}
              {/*  */}
              {/**/}
              {/*  */}
              {/* */}
              {/* <Route path="/user-not-found" element={<UserNotFoundPage />} /> */}
          </Route>
       </Routes>
    </BrowserRouter>
        
     
  )
}

export default App
