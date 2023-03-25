'use client'
import React from 'react'
import { useState } from 'react'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { RxCross2 } from 'react-icons/rx'
const Add = () => {
    const [ add, setAdd ] = useState(false)
    const [ family, setFamily] = useState("")

    function handleExit() {
      setFamily("")
      setAdd(false)
    }

  return (
    <div className=" text-gray-700 dark:text-gray-50 
        w-52 h-60 rounded-md 
        p-4 ease-in duration-200 cursor-pointer flex flex-col justify-center pb-16 z-40">
        <h2 className="text-2xl font-semibold text-center m-2">Add Family</h2>
        <button type='button' className='h-fit w-full' onClick={() => setAdd(true)}>
            <IoIosAddCircleOutline size={90} className='m-auto hover:scale-105 ease-in duration-100 ' />
        </button>
        {add ? 
        <div className='fixed top-0 left-0 h-screen w-full bg-black/75 ease-in-out duration-200'>
          <div className='h-96 w-96 bg-white mx-auto mt-60 rounded-lg flex flex-col justify-between'>
            <button type='button' onClick={handleExit} className='p-3 text-gray-500 hover:text-gray-700 flex ml-auto'>
              <RxCross2 size={28} />
            </button>
            <h1 className='text-gray-700 text-2xl font-semibold text-center'>Add family</h1>
            <div className='flex mt-auto bg-slate mb-20 mx-auto'>
              <form className='flex gap-2'>
                <input value={family} onChange={(e) => setFamily(e.target.value)} className='mt-auto h-10 bg-gray-100 rounded-lg p-2 outline-none' placeholder='Family Name'></input>
                <button className='p-2 bg-indigo-500 text-gray-50 rounded-lg hover:bg-indigo-600 ease-in duration-100'>Add</button>
              </form>
            </div>
          </div>
        </div> 
        : 
        <div></div>}
    </div>
  )
}

export default Add
