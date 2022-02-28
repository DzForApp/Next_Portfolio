import React from 'react'
/*
import Logo from '../commun/Logo'
import CartIcon from '../_icons/CartIcon'
import HeartIcon from '../_icons/HeartIcon'
import MenuIcon from '../_icons/MenuIcon'
import SearchIcon from '../_icons/SearchIcon'
import UserIcon from '../_icons/UserIcon' */

export default function TopBar() {
  return (
    <nav className="flex mx-auto px-4 py-8 w-full h-24 bg-orange-500 items-center  justify-around">
      <div className="flex space-x-2">
        <p className='text-3xl text-white bold'>KubertosDev</p>
      </div>
      <div className='text-white'>
        <ul className='flex text-2xl gap-6'>
          <li>
            <a href="#">
              AboutMe
            </a>
          </li>
          <li> 
            <a href="#">
            Resume 
             </a>
            </li>
          <li>
             <a href="#">
            My Skills  
            </a>
            </li>
          <a href="#">
            ContactMe
          </a>
        </ul>
      </div>

    </nav>

  )
}
