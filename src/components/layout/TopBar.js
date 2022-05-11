import React, { useState } from 'react'
import LinkedIcond from '../icons/LinkedIcon' 
import GitIcon from '../icons/GitIcon' 
 import MySocialLinks from '../util/MySocialLinks'



const sections = ['Home', 'About me', 'Skills', 'Latest Work']
const MenuIcon = ({ menuOpen }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`transition duration-200 ease-linear h-8 w-8 ${menuOpen ? 'transform rotate-90' : ''}`} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
);

export default function TopBar () {

  const [menuOpen, setMenuOpen] = useState(true)
  const navLinks = sections.map(
    section => <a key={section} href={`#${section.replace(' ', '_')}`}
      className='text-dark text-xl  no-underline space-x-4 mx-6 font-semibold hover:text-gray-600'
      onClick={() => setMenuOpen(!menuOpen)}
    >{section}</a>

  )


  return (
    <nav className="fixed top-0 z-0 flex px-4 w-full h-16 bg-gradient-to-r from-slate-400 to-red-400 items-center justify-between ">
      <div className="flex space-x-2">
        <p className='text-2xl  text-dark left-0 font-bold hover:text-gray-900'><a href='#Home'>
           Reda Azer</a>
          </p>
      </div>
      <nav className='flex flex-row  justify-center'>
        {navLinks}
      </nav>
      <button type='button' aria-label='Toggle mobile menu' onClick={() => setMenuOpen(!menuOpen)}
        className="rounded md:hidden focus:outline-none focus:ring-green-800 focus:ring-opacity-50">
         <MenuIcon menuOpen={menuOpen} />  
         </button>
         <MySocialLinks />
    </nav>

  )
}
