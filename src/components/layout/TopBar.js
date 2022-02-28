import React, { useState } from 'react'


const sections = ['Home', 'About me', 'Skills', 'Latest Work', 'Contact me']
const MenuIcon = ({ menuOpen }) => {
  <svg xmlns="http://www.w3.org/2000/svg" className={`transition duration-200 ease-linear h-8 w-8 ${menuOpen ? 'transform rotate-90' : ''}`} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
}

export default function TopBar () {

  const [menuOpen, sestMenuOpen] = useState(true)
  const navLinks = sections.map(
    section => <a key={section} href={`#${section.replace(' ', '_')}`}
      className='text-dark text-xl  no-underline space-x-4 mx-6 font-semibold hover:text-gray-600'
      onClick={() => sestMenuOpen(!menuOpen)}
    >{section}</a>

  )


  return (
    <nav className="flex mx-auto px-4 py-8 w-full h-24 bg-gradient-to-r from-orange-400 to-orange-50 items-center  justify-between">
      <div className="flex space-x-2">
        <p className='text-3xl text-gray-600 font-bold hover:text-gray-900'><a href='#Home'>
          KubertosDev</a>
          </p>
      </div>
      <nav className='flex flex-row  mr-12'>
        {navLinks}
      </nav>

    </nav>

  )
}
