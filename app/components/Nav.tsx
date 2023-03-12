'use client'
import LoginButton from './buttons/LoginButton'
import SignUpButton from './buttons/SignUpButton'
import ThemeButton from './buttons/ThemeButton'
import SideMenu from './SideMenu'
import { useEffect, useState } from 'react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../api/hello/auth/[...nextAuth]'


export default function Nav() {
  
    const [dark, setDark] = useState(false);

    return (
    <nav className='bg-white dark:bg-[#343c48] w-full fixed h-16'>
      <div className='flex h-full justify-between max-w-7xl m-auto '>
        <a href='#landing' className='text-indigo-500 dark:text-indigo-400 text-3xl font-bold my-auto pl-2'>wtfd?</a>

        <div className='sm:flex gap-8'>
            <div className='hidden sm:flex gap-6'>
              <a href='#about' className='text-gray-700 dark:text-gray-50 font-bold cursor-pointer m-auto' >
                About
              </a>
              <a href='#connect' className='text-gray-700 dark:text-gray-50 font-bold cursor-pointer m-auto' >
                Connect
              </a>   
            </div>
            <div className='flex gap-2 pr-2'>
                <ThemeButton display='hidden sm:flex' displayOuter='ml-auto mr-2' dark={dark} setDark={setDark}/>
                <LoginButton display='hidden sm:flex' />
                <SignUpButton px='px-4' m='m-auto' text='text-base' display='hidden sm:flex'/>
            </div>
        </div>
        <SideMenu dark={dark} setDark={setDark}/>
      </div>
    </nav>
  )
}


