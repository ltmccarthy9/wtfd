'use client'
import { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import {signIn} from 'next-auth/react'

type Display = {
  display: string
}

const LoginButton = ({display}: Display) => {

  const [ loginActive, setLoginActive ] = useState(false)

  return (
    <div className='m-auto'>
       <button type="button" onClick={() => signIn("google")} className={`${display} border-2 border-indigo-500 bg-indigo-500 px-5 py-2
        text-md text-gray-50 font-bold rounded-lg hover:bg-indigo-600 hover:border-indigo-600 ease-in duration-100`}>
          Login
      </button>

      {/* <div className={loginActive ? 'fixed h-screen w-full top-0 right-0 bg-black/60 p-2' : 'm-auto hidden'}>
        <div className={loginActive ? "bg-gray-50 dark:bg-gray-700 rounded-lg mx-auto mt-24 sm:mt-40 max-w-md h-fit flex flex-col" : 'hidden'}>
            <div className='flex justify-between m-8'>
              <h2 className='text-indigo-500 dark:text-indigo-400 text-2xl font-bold'>Welcome back!</h2>
              <button type='button' onClick={() => setLoginActive(false)}>
                <RxCross2 className='hover:scale-110 ease-in duration-100 text-gray-700 dark:text-gray-50' size={23}/>
              </button>
            </div>
           <div className='flex flex-col gap-10 mt-2 w-5/6 m-auto'>
            <input className='p-2 focus:outline-none text-gray-700 dark:text-gray-50 bg-gray-50 dark:bg-gray-700 border-b border-indigo-500' placeholder='username'></input>
            <input className='p-2 focus:outline-none text-gray-700 dark:text-gray-50 bg-gray-50 dark:bg-gray-700 border-b border-indigo-500' placeholder='password'></input>
            <button type='submit' className='bg-indigo-500 text-gray-50 rounded-lg p-2 font-semibold hover:bg-indigo-600 ease-in duration-100 mt-2 mb-10'>login</button>
           </div>
        </div>
      </div> */}
      
    </div>
      
  )
}

export default LoginButton
