import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className={'flex justify-between items-start py-12 px-14 mt-4 bg-black '+
    ' text-white rounded-2xl'}>
        <div className="footer-col">
            <ul >
                {/* For clients*/}
                <li className='footer-col-title'>For Clients</li>
                <li>How to hire </li>
                <li>Talent Marketplace </li>
                <li>Project Catalog </li>
                <li>Hire an Agency</li>
            </ul>
        </div>

        <div className="footer-col">
            <ul className=''>
                {/* For Talents*/}
                <li className='footer-col-title'>For Talents</li>
                <li>How to find work </li>
                <li>Direct Contracts </li>
                <li>Find freelance work worldwide </li>
                <li>Find freelance work in USA</li>
            </ul>
        </div>

        <div className="footer-col">
            <ul className=''>
                {/* Ressources*/}
                <li className='footer-col-title'>Ressources</li>
                <li>Help & Support</li>
                <li>Success stories </li>
                <li>Upwork reviews </li>
                <li>Ressources</li>
            </ul>
        </div>

        <div className="footer-col">
            <ul className=''>
                {/* Company*/}
                <li className='footer-col-title'>Company</li>
                <li>About us</li>
                <li>LeaderShip</li>
                <li>Investor relations</li>
                <li>Careers</li>
            </ul>
        </div>
    </footer>
  )
}
