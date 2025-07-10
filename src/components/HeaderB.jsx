import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdHelp } from 'react-icons/md'

const HeaderB = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">

      {/* START : menu hamburger pour mobile */}
      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Find Work</a></li>
            <li><a>Deliver Work</a></li>
            <li><a>Manage Finances</a></li>
            <li><a>Messages</a></li>
          </ul>
        </div>
      </div>
      {/* END menu hamburger */}

      {/* LOGO CENTRE */}
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">Upwork Clone</a>
      </div>

      {/* NAVBAR MENU HORIZONTAL en plein écran */}
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Find Work</summary>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>

          <li>
            <details>
              <summary>Deliver Work</summary>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
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
        <div className="border border-gray-600 rounded-full flex items-center gap-1 px-2 py-1 hidden md:flex">
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
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-40 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HeaderB
