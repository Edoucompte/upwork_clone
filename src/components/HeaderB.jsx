import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdHelp } from 'react-icons/md'
import { FaUser, FaChartLine, FaCreditCard, FaPalette, FaCogs, FaSignOutAlt } from 'react-icons/fa'

const HeaderB = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
const [openSection, setOpenSection] = useState('')  // pour gérer quel sous-menu est ouvert

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? '' : section)
  }
  return (
    <><div className="navbar bg-base-100 shadow-sm">

     

     <div className="navbar bg-base-100 shadow-sm ">
      {/* LOGO CENTRE */}
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">Upwork Clone</a>
      </div>
      <div className="lg:hidden">
  <button
    className="btn btn-ghost"
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>
</div>

      {/* NAVBAR MENU HORIZONTAL en plein écran */}
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <details>
              <summary>Find Work </summary>
              <ul className="p-2  w-44">
                <li><a>Find work</a></li>
                <li><a>Saved jobs</a></li>
                 <li><a>Proposals and offers</a></li>
                <li><a>Reach ore clients</a> </li>
                 <li><a>Your services</a></li>
                <li><a>Promote  with ad</a></li>
                <li><a>Direct contracts</a></li>
              </ul>
            </details>
          </li>

          <li>
            <details>
              <summary>Deliver Work</summary>
              <ul className="p-2 w-44">
                <li><a>Your active contracts</a></li>
                <li><a>Contract history</a></li>
                 <li><a>Hourly work diary</a></li>
              </ul>
            </details>
          </li>

          <li>
            <details>
              <summary>Manage Finances</summary>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>

          <li><a>Messages</a></li>
        </ul>
      </div>

      {/* NAVBAR RIGHT */}
      <div className="navbar-end flex items-center gap-2">
        {/* Search input */}
        <div className="border border-gray-600 rounded-full  items-center gap-1 px-2 py-1 hidden lg:flex">
          <FaSearch className="px-1" />
          <input type="text" placeholder="Search" className="px-2 w-28 md:w-auto" /> 
          <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-dash">
            <span className="w-10 border-s border-e-amber-100 p-2 rounded-e-full">
              Jobs
            </span>
          </div>
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-44 p-2 shadow">
            <li><a>Jobs</a></li>
            <li><a>Talents</a></li>
            <li><a>Projects</a></li>
          </ul>
        </div>
        </div>

        {/* Jobs dropdown */}
       

        {/* Search icon */}
        <button className="btn btn-ghost btn-circle">
         <MdHelp color='white' size={30}> </MdHelp>
        </button>

        {/* Notification badge */}
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>

        {/* Avatar */}
        <div className="dropdown px-1 dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="User"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          {/* Dropdown Content */}
      <ul tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-56 p-3 shadow">

        {/* Header image + title */}
        <li className="mb-2">
          <div className="flex items-center gap-2 px-2">
            <div className="w-12 rounded-full overflow-hidden">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="user"
              />
            </div>
            <div>
              <p className="font-semibold">Développeur Freelance</p>
              <p className="text-xs text-gray-500">Active</p>
            </div>
          </div>
        </li>

        <li><a><FaUser className="mr-2" />  Your Profile</a></li>
        <li><a><FaChartLine className="mr-2" /> Stats & Trends</a></li>
        <li><a><FaCreditCard className="mr-2" /> Membership Plan</a></li>
        <li><a><FaPalette className="mr-2" /> Connect Theme</a></li>
        <li><a><FaCogs className="mr-2" /> Account Settings</a></li>

        <div className="divider my-1"></div>

        <li>
          <a className="text-red-500">
            <FaSignOutAlt className="mr-2" /> Logout
          </a>
        </li>
      </ul>
        </div>

      </div>
     </div>
     
    </div>
     {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="w-full bg-white text-black p-4 flex flex-col gap-2 shadow-lg lg:hidden">

          {/* Find Work */}
          <div>
            <button onClick={() => toggleSection('find')}
              className="w-full text-left font-bold py-2 border-b border-b-black">Find Work</button>
            {openSection === 'find' && (
              <div className="pl-4 flex flex-col gap-2">
                <a className="block">Find work</a>
                <a className="block">Saved jobs</a>
                <a className="block">Proposals and offers</a>
                <a className="block">Reach more clients</a>
                <a className="block">Your services</a>
                <a className="block">Promote with ad</a>
                <a className="block">Direct contracts</a>
              </div>
            )}
          </div>

          {/* Deliver Work */}
          <div>
            <button onClick={() => toggleSection('deliver')}
              className="w-full text-left font-bold py-2 border-b border-b-black">Deliver Work</button>
            {openSection === 'deliver' && (
              <div className="pl-4 flex flex-col gap-2">
                <a className="block">Your active contracts</a>
                <a className="block">Contract history</a>
                <a className="block">Hourly work diary</a>
              </div>
            )}
          </div>

          {/* Manage Finances */}
          <div>
            <button onClick={() => toggleSection('finance')}
              className="w-full text-left font-bold py-2 border-b border-b-black">Manage Finances</button>
            {openSection === 'finance' && (
              <div className="pl-4 flex flex-col gap-2">
                <a className="block">Payments</a>
                <a className="block">Reports</a>
              </div>
            )}
          </div>

          {/* Messages */}
          <a className="block font-bold py-2">Messages</a>
        </div>
      )}
    </>
    
  )
}

export default HeaderB
