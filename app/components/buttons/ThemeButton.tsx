'use client'
import React, { useEffect, useState } from 'react'
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs'

// this is our
const ThemeButton = () => {

    // state for determining display of moon or sun icon
    const [ dark, setDark ] = useState(false)

    // this toggles between our dark and light theme
    const changeTheme = () => {
        document.documentElement.classList.toggle('dark');
        setDark(!dark)
      }

  return (
    <button type='button' onClick={changeTheme} className='my-auto mx-4'>
        <BsFillMoonFill className={dark ? 'hidden' : 'hover:scale-110 ease-in duration-100'} color={'black'} size={26}/>
        <BsSunFill className={dark ? 'hover:scale-110 ease-in duration-100' : 'hidden'} color={'white'} size={26}/>
    </button>
  )
}

export default ThemeButton
