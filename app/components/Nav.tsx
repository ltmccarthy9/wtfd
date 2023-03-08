
import React from 'react'
import Link from 'next/link'
import LoginButton from './buttons/LoginButton'
import SignUpButton from './buttons/SignUpButton'
import ThemeButton from './buttons/ThemeButton'
import SideMenu from './SideMenu'
import { useState } from 'react'


const Nav = () => {
  
    return (
    <nav className='bg-white dark:bg-[#343c48] w-full fixed h-16'>
      <div className='flex h-full justify-between max-w-7xl m-auto '>
        <a href='#landing' className='text-gray-700 dark:text-gray-50 text-2xl font-extrabold my-auto pl-2'>WTFD?</a>

        <div className='sm:flex gap-8'>
            <div className='hidden sm:flex gap-2'>
              <a href='#about' className='text-gray-700 dark:text-gray-50 font-bold cursor-pointer m-auto' >
                About
              </a>  
            </div>
            <div className='flex gap-2 pr-2'>
                <ThemeButton/>
                <LoginButton />
                <SignUpButton/>
            </div>
        </div>
        <SideMenu/>
      </div>
    </nav>
  )
}

export default Nav
