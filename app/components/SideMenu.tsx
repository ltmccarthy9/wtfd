'use client'
import React from 'react'
import { useState } from 'react'
import { CgMenuRight } from 'react-icons/cg'

const SideMenu = () => {
  
    const [ menuActive, setMenuActive ] = useState(false)

    return (
    <div className={menuActive ? 'fixed h-screen mt-16 w-full bg-black/70 sm:hidden ' : 'sm:hidden'}>
    
    <button type='button' onClick={() => setMenuActive(!menuActive)} className='fixed sm:hidden top-5 right-5'>
        <CgMenuRight color='black' size={26}/>
    </button>

    </div>
  )
}

export default SideMenu
