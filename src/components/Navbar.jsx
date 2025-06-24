import React from 'react'
import Searchbar from './Searchbar'

export default function Navbar() {
  return (
    <header>
        <nav>
            <ul className='flex flex-wrap gap-3.5 items-center'>
                <li><h1 className='text-xl'>Upwork-clone</h1></li>
                <li>Find talent</li>
                <li>Find work </li>
                <li>Why Upwork</li>
                <li>What's new</li>
                <li>Entreprise </li>
                <li>Princing</li>
                <li><Searchbar /></li>

                <li>
                  <button className='btn border-none py-2 px-4.5 rounded-xl'>
                    Log in
                  </button>
                </li>
                <li>
                  <button className='btn bg-green-700 text-white py-2 px-4.5 rounded-xl'>
                    Sign up
                  </button>
                </li>

                <li>Development & IT</li>
                <li>Ai Services</li>
                <li>Design & Creative</li>
                <li>Sales & Marketing</li>
                <li>Admin & Customer Support</li>
                <li>More</li>
            </ul>

        </nav>
    </header>
  )
}
