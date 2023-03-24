'use client'
import React from 'react'
import { useState } from 'react'
import { IoIosAddCircleOutline } from 'react-icons/io'
const Add = () => {
    const [ add, setAdd ] = useState(false)
    
  return (
    <div className=" text-gray-700 dark:text-gray-50 
        w-52 h-60 rounded-md 
        p-4 ease-in duration-200 cursor-pointer flex flex-col justify-center pb-16">
        <h2 className="text-2xl font-semibold text-center m-2">Add Family</h2>
        <button type='button' className='h-fit w-full' onClick={() => setAdd(true)}>
            <IoIosAddCircleOutline size={90} className='m-auto hover:scale-105 ease-in duration-100 ' />
        </button>
    </div>
  )
}

export default Add
