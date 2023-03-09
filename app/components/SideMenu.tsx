'use client'
import React from 'react'
import { useState } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import LoginButton from './buttons/LoginButton'
import SignUpButton from './buttons/SignUpButton'
import ThemeButton from './buttons/ThemeButton'
import { RxCross2 } from 'react-icons/rx'

type Display = {
  dark: boolean,
  setDark: React.Dispatch<React.SetStateAction<boolean>>
}

const SideMenu = ({dark, setDark}: Display) => {
  
    const [ menuActive, setMenuActive ] = useState(false)

    return (
    <div className={menuActive ? 'fixed h-screen mt-16 w-full bg-black/70 sm:hidden ' : 'sm:hidden'}>
    
    <button type='button' onClick={() => setMenuActive(!menuActive)} className='fixed sm:hidden top-5 right-5 text-black dark:text-white'>
        {menuActive ? <RxCross2 size={26} className='transition-all ease-in duration-100'/> : <CgMenuRight size={26} className='transition-all ease-in duration-100'/> }
    </button>

    
      <div className={menuActive ? 'flex sm:hidden bg-gray-50 dark:bg-gray-700 transition-all ease-in duration-150' : 'hidden'}>
              <div className='sm:hidden flex flex-col gap-14 m-auto p-8'>
                <a onClick={() => setMenuActive(false)} href='#about' className='text-gray-700 dark:text-gray-50 font-bold cursor-pointer m-auto' >
                  About
                </a>
                <a onClick={() => setMenuActive(false)} href='#connect' className='text-gray-700 dark:text-gray-50 font-bold cursor-pointer m-auto' >
                  Connect
                </a>
                <LoginButton display='flex sm:hidden'/>
                <SignUpButton px='px-4' m='m-auto' text='text-base' display='flex sm:hidden'/>
                <div className='m-auto'>
                  <ThemeButton display='flex sm:hidden' dark={dark} setDark={setDark}/>
                </div>   
              </div>
          </div>
   

    </div>
  )
}

export default SideMenu
