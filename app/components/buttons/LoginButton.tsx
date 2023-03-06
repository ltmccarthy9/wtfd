'use client'
import { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
// login button in nav
const LoginButton = () => {

  const [ loginActive, setLoginActive ] = useState(false)



  return (
    <div className='m-auto'>
       <button type="button" onClick={() => setLoginActive(true)} className='hidden sm:flex border-2 border-indigo-500 bg-indigo-500 px-5 py-2
        text-md font-bold rounded-lg hover:bg-indigo-600 hover:border-indigo-600 ease-in duration-100'>
          Login
      </button>

      <div className={loginActive ? 'fixed h-screen w-full top-0 right-0 bg-black/60 p-2' : 'm-auto hidden'}>
        <div className={loginActive ? "bg-gray-50 rounded-lg p-4 mx-auto mt-40 max-w-md h-1/3 flex flex-col" : 'hidden'}>
            <div className='flex justify-between p-2'>
              <h2 className='text-indigo-500 text-2xl font-bold'>Login</h2>
              <button type='button' onClick={() => setLoginActive(false)}>
                <RxCross2 className='hover:scale-110 ease-in duration-100' size={23} color={'black'}/>
              </button>
            </div>
            <button className='font-bold text-xl text-gray-700'>Google</button>
            <button className='font-bold text-xl text-gray-700'>Facebook</button>
        </div>
      </div>
      
    </div>
      
  )
}

export default LoginButton
