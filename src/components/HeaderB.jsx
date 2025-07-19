import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdHelp } from 'react-icons/md'
import { FaUser, FaChartLine, FaCreditCard, FaPalette, FaCogs, FaSignOutAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const HeaderB = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
const [openSection, setOpenSection] = useState('')  // pour gérer quel sous-menu est ouvert

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? '' : section)
  }
  return (
    <>
      <header>
        <div className='navbar bg-white text-black'>
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
          

          <div className="navbar bg-white text-black ">
              {/* LOGO CENTRE */}
              <div className="navbar-start">
                <Link className="btn btn-ghost text-[0.7rem] sm:text-xl">Upwork Clone</Link>
              </div>

              {/* NAVBAR MENU HORIZONTAL en plein écran */}
              <div className="navbar-center hidden xl:flex">
                <ul className="menu menu-horizontal px-1 ">
                  <li>
                    <details>
                      <summary>Find Work </summary>
                      <ul className="p-2  w-44 bg-white">
                        <li><Link>Find work</Link></li>
                        <li><Link>Saved jobs</Link></li>
                        <li><Link>Proposals and offers</Link></li>
                        <li><Link>Reach ore clients</Link> </li>
                        <li><Link>Your services</Link></li>
                        <li><Link>Promote  with ad</Link></li>
                        <li><Link>Direct contracts</Link></li>
                      </ul>
                    </details>
                  </li>

                  <li>
                    <details>
                      <summary>Deliver Work</summary>
                      <ul className="p-2 w-44 bg-white">
                        <li><Link>Your active contracts</Link></li>
                        <li><Link>Contract history</Link></li>
                        <li><Link>Hourly work diary</Link></li>
                      </ul>
                    </details>
                  </li>

                  <li>
                    <details>
                      <summary>Manage Finances</summary>
                      <ul className="p-2 bg-white">
                        <li><Link>Submenu 1</Link></li>
                        <li><Link>Submenu 2</Link></li>
                      </ul>
                    </details>
                  </li>

                  <li><Link>Messages</Link></li>
                </ul>
              </div>

              {/* NAVBAR RIGHT */}
              <div className="navbar-end flex items-center gap-2">
                {/* Search input */}
                <div className="border border-gray-600 rounded-full  items-center gap-1 px-2 py-1 hidden lg:flex">
                  <div className='flex justify-start gap-4'> 
                    <div className="text-center px-1 flex justify-center items-center"> <FaSearch size={20}  /></div>
                    <input type="text" placeholder="Search" className="px-2 max-w-44 border-0  md:w-auto " /> 
                  </div>
                  

                  <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-dash">
                    <span className="w-10 border-s border-e-amber-100 p-2 rounded-e-full">
                      Jobs
                    </span>
                  </div>
                  <ul tabIndex={0}
                    className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-44 p-2 shadow">
                    <li><Link>Jobs</Link></li>
                    <li><Link>Talents</Link></li>
                    <li><Link>Projects</Link></li>
                  </ul>
                </div>
                </div>

                {/* Jobs dropdown */}
              

                {/* Help icon */}
                <button className="btn btn-circle bg-black hidden md:flex justify-center">
                  <MdHelp color='white ' size={45} className='m-0'> </MdHelp>
                </button>

                {/* Notification badge */}
                <button className="btn btn-ghost btn-circle hidden sm:flex">
                  <div className="indicator m-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
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
                  <div tabIndex={0} role="button" 
                    className="btn btn-ghost btn-circle avatar avatar-online p-3 bg-gray-200 dark:bg-gray-600 dark:text-neutral-content"
                  >
                    <div className="w-10 rounded-full">
                      {/*<img alt="User"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        */}

                    </div>
                  </div>
                  {/* Dropdown Content */}
                  <ul tabIndex={0}
                    className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-56 p-3 shadow">

                    {/* Header image + title */}
                    <li className="mb-2 ">
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

              <li><Link><FaUser className="mr-2" />  Your Profile</Link></li>
              <li><Link><FaChartLine className="mr-2" /> Stats & Trends</Link></li>
              <li><Link><FaCreditCard className="mr-2" /> Membership Plan</Link></li>
              <li><Link><FaPalette className="mr-2" /> Connect Theme</Link></li>
              <li><Link><FaCogs className="mr-2" /> Account Settings</Link></li>

                    <div className="divider my-1"></div>

                    <li>
                      <Link className="text-red-500">
                        <FaSignOutAlt className="mr-2" /> Logout
                      </Link>
                    </li>
                  </ul>
                </div>

              </div>
          </div>
        </div>
        
      </header>
     {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="w-full bg-white text-black p-4 flex flex-col gap-2 shadow-lg lg:hidden">

          {/* Find Work */}
          <div>
            <button onClick={() => toggleSection('find')}
              className="w-full text-left font-bold py-2 border-b border-b-black">Find Work</button>
            {openSection === 'find' && (
              <div className="pl-4 flex flex-col gap-2">
                <Link className="block">Find work</Link>
                <Link className="block">Saved jobs</Link>
                <Link className="block">Proposals and offers</Link>
                <Link className="block">Reach more clients</Link>
                <Link className="block">Your services</Link>
                <Link className="block">Promote with ad</Link>
                <Link className="block">Direct contracts</Link>
              </div>
            )}
          </div>

          {/* Deliver Work */}
          <div>
            <button onClick={() => toggleSection('deliver')}
              className="w-full text-left font-bold py-2 border-b border-b-black">Deliver Work</button>
            {openSection === 'deliver' && (
              <div className="pl-4 flex flex-col gap-2">
                <Link className="block">Your active contracts</Link>
                <Link className="block">Contract history</Link>
                <Link className="block">Hourly work diary</Link>
              </div>
            )}
          </div>

          {/* Manage Finances */}
          <div>
            <button onClick={() => toggleSection('finance')}
              className="w-full text-left font-bold py-2 border-b border-b-black">Manage Finances</button>
            {openSection === 'finance' && (
              <div className="pl-4 flex flex-col gap-2">
                <Link className="block">Payments</Link>
                <Link className="block">Reports</Link>
              </div>
            )}
          </div>

          {/* Messages */}
          <Link className="block font-bold py-2">Messages</Link>

          <Link className='block font-bold py-2'>Notifications</Link>
          <Link className='block font-bold py-2'>Help</Link>
        </div>
      )}
    </>
    
  )
}

export default HeaderB
