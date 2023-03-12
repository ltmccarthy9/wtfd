'use client'
import ThemeButton from './buttons/ThemeButton';
import { useState } from 'react'

export default function TopBar(){

    const [dark, setDark] = useState(false);

    return (
        <div className="h-10 w-full fixed top-0 left-0 bg-white dark:bg-[#343c48]">
            <div className="text-gray-700 dark:text-gray-50 mx-auto h-full flex">
                    <ThemeButton display='my-auto mr-2 mt-1' displayOuter='ml-auto mr-2' dark={dark} setDark={setDark}/>
            </div>
        </div>
    )
}