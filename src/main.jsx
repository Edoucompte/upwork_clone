import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import SignupNavbar from './components/signup/SignupNavbar'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { AuthProvider } from './context/AuthContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
    
  </StrictMode>,
)
