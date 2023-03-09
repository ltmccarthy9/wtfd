'use client'

import React from 'react'
import { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'

type SignUpProps = {
  px: string,
  m: string,
  text: string,
  display: string
}

const SignUpButton = ({ px, m, text, display }: SignUpProps) => {

  const [ signinActive, setSigninActive ] = useState(false)

  return (
   <div className={`${m}`}>
       <button onClick={() => setSigninActive(true)} className={`${display} mx-auto border-2 border-indigo-500 ${px} py-2
        ${text} text-indigo-500 font-bold rounded-lg hover:border-indigo-700
         hover:text-indigo-700 ease-in duration-100 dark:text-indigo-400 dark:border-indigo-400 dark:hover:text-indigo-300 dark:hover:border-indigo-300`}>
        Sign Up
        </button>

        <div className={signinActive ? 'fixed h-screen w-full top-0 right-0 bg-black/60 p-2' : 'm-auto hidden'}>
          <div className={signinActive ? "bg-gray-50 dark:bg-gray-700 rounded-lg mx-auto mt-16 sm:mt-40 max-w-md h-fit flex flex-col" : 'hidden'}>
              <div className='flex justify-between m-8'>
                <h2 className='text-indigo-500 dark:text-indigo-400 text-2xl font-bold'>Sign Up</h2>
                <button type='button' onClick={() => setSigninActive(false)}>
                  <RxCross2 className='hover:scale-110 ease-in duration-100 text-gray-700 dark:text-gray-50' size={23}/>
                </button>
              </div>
            <div className='flex flex-col gap-6 mt-2 w-5/6 m-auto text-base font-normal'>
              <div className='flex gap-2'>
                <input className='w-1/2 p-2 focus:outline-none text-gray-700 dark:text-gray-50 bg-gray-50 dark:bg-gray-700 border-b border-indigo-500' placeholder='first name'></input>
                <input className='w-1/2 p-2 focus:outline-none text-gray-700 dark:text-gray-50 bg-gray-50 dark:bg-gray-700 border-b border-indigo-500' placeholder='last name'></input>
              </div>
              <input type='email' className='p-2 focus:outline-none text-gray-700 dark:text-gray-50 bg-gray-50 dark:bg-gray-700 border-b border-indigo-500' placeholder='email'></input>
              <input type='password' className='p-2 focus:outline-none text-gray-700 dark:text-gray-50 bg-gray-50 dark:bg-gray-700 border-b border-indigo-500' placeholder='password'></input>
              <input type='password' className='p-2 focus:outline-none text-gray-700 dark:text-gray-50 bg-gray-50 dark:bg-gray-700 border-b border-indigo-500' placeholder='re-enter password'></input>
              <button type='submit' className='bg-indigo-500 text-gray-50 rounded-lg p-2 font-semibold hover:bg-indigo-600 ease-in duration-100 mt-6 mb-10'>Sign up</button>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default SignUpButton
