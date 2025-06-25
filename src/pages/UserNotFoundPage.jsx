import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import React from 'react'

export default function UserNotFoundPage() {
  return (
    <div className='p-5 text-[0.9rem]'>
      <Navbar />
      <main className='py-6 px-10 mt-10'>
        <p className='bg-yellow-100 p-3.5 rounded-[0.4rem] mx-8'>
          <span> !!! </span>
          This freelancer's profile is only available to Upwork-clone customers.
          Please <span>login</span>, or <span>signup</span> to view their profile.
        </p>
      </main>
      <Footer />
    </div >
  )
}
