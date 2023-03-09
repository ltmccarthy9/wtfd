import React from 'react'
import { BsGithub, BsLinkedin, BsFillFileEarmarkPersonFill } from 'react-icons/bs'

const Connect = () => {
  return (
    <div className='h-screen flex flex-col bg-indigo-500 w-full justify-center'>
        <div className='flex flex-col gap-6 w-full'>
            <h2 className=' text-gray-50 text-4xl font-bold mb-2 m-auto'>Connect</h2>
            <div className='flex gap-8'>
                <a href='https://github.com/ltmccarthy9' target='_blank' className='ml-auto cursor-pointer hover:scale-110 ease-in duration-150'>
                    <BsGithub color='#f9fafb' size={40}/>
                </a>
                <a href='https://www.linkedin.com/in/liam-mccarthy-b06b9a218' target='_blank' className='cursor-pointer hover:scale-110 ease-in duration-150'>
                    <BsLinkedin color='#f9fafb' size={40}/>
                </a>
                <a href='https://nextjs-portfolio-ltmccarthy9.vercel.app/' target='_blank' className='mr-auto cursor-pointer hover:scale-110 ease-in duration-150'>
                    <BsFillFileEarmarkPersonFill color='#f9fafb' size={40}/>
                </a>
            </div>   
        </div>
        <span className='anchor' id='connect'></span>
    </div>
  )
}

export default Connect
