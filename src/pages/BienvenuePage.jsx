import React from 'react'
import {  RiMessage3Line,  RiMoneyDollarBoxLine, RiUser3Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';

const BienvenuePage = () => {
  const navigate = useNavigate();
  const handleStart = () => {
    // Logic to handle the start of the profile creation process
    navigate('/debut-profile'); // Navigate to the next step
    }
  return (
    <div className='py-10 px-30 bg-white min-h-screen text-black'>

        <h1 className='text-4xl my-3'>Hey test.Ready for your next big opportunity ?</h1>


        <div className='flex flex-col gap-4 my-16'>
            <div className='flex gap-4'><span><RiUser3Line/>   </span><p>Answer a few questions and start building your profile</p></div>
            <div className='flex gap-4'><span><RiMessage3Line/></span><p>Aply for open roles or list services for client to buy</p></div>
            <div className='flex gap-4'><span><RiMoneyDollarBoxLine/>    </span><p>Get paid safely and no we're the to help </p></div>
        </div>
        <div className='flex gap-5 items-center'>
            <button onClick={handleStart} className='bg-green-600 text-white px-4 py-2 rounded'>Get started</button> 
             <span className='text-shadow-gray-200'>It only take 5-10 minutes and you can edit it later. We 'll save as you go</span>
        </div>
    </div>
  )
}

export default BienvenuePage