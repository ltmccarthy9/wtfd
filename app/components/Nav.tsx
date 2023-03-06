
import React from 'react'
import LoginButton from './buttons/LoginButton'
import SignUpButton from './buttons/SignUpButton'
const Nav = () => {
  return (
    <nav className='bg-white dark:bg-[#343c48] w-full fixed h-16'>
      <div className='flex h-full justify-between px-4 max-w-7xl m-auto'>
        <h2 className='text-gray-700 dark:text-gray-50 text-2xl font-extrabold my-auto'>WTFD?</h2>

        <div className='flex gap-8'>
            <div className='flex gap-2'>
                <a className='text-gray-700 dark:text-gray-50 m-auto font-bold cursor-pointer'>About</a>
            </div>
            <div className='flex gap-2'>
                <LoginButton/>
                <SignUpButton/>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
