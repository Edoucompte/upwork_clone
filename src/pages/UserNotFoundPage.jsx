import SignupNavbar from '../components/signup/SignupNavbar'
import React from 'react'
import { useNavigate } from "react-router-dom";

export default function UserNotFoundPage() {
  const navigate = useNavigate();
  return (
    <>
      <SignupNavbar/>
      <main className='py-6 px-10 min-h-screen bg-white text-black flex'>
        <p className='bg-yellow-100 p-3.5 rounded-[0.4rem] m-auto'>
          <span> !!! </span>
          This freelancer's profile is only available to Upwork-clone customers.
          Please 
          <span className='cursor-pointer underline text-green-600 px-3'
            onClick={ ()=> {navigate('/login')}}
          >login</span>, or 
          <span className='cursor-pointer underline text-green-600 px-3'
            onClick={ ()=> {navigate('/register')}}
          >signup</span> to view their profile.
        </p>
      </main>
    </>
  )
}
