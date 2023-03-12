'use client'
import React from 'react'
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs'

type Display = {
  display: string;
  dark: boolean;
  displayOuter: string
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeButton = ({display, displayOuter, dark, setDark}: Display) => {

    const changeTheme = () => {
        document.documentElement.classList.toggle('dark');
        setDark(!dark)
      }

  return (
    <button type='button' onClick={changeTheme} className={`${displayOuter}`}>
        <BsFillMoonFill className={dark ? 'hidden' : `${display} hover:scale-110 ease-in duration-100`} color={'black'} size={22}/>
        <BsSunFill className={dark ? `${display} hover:scale-110 ease-in duration-100` : 'hidden'} color={'white'} size={22}/>
    </button>
  )
}

export default ThemeButton
