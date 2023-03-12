'use client'
import ThemeButton from './buttons/ThemeButton';
import { useEffect, useState } from 'react'

export default function TopBar(){
    const [dark, setDark] = useState(false);
    return (
        <div className="h-10 w-full fixed top-0 left-0 bg-white dark:bg-[#343c48]">
            <div className="text-gray-700 dark:text-gray-50 mx-auto h-full flex">
                <button className='ml-auto my-auto'>
                    <ThemeButton display='m-auto mt-1' dark={dark} setDark={setDark}/>
                </button>
            </div>
        </div>
    )
}