'use client'
import ThemeButton from "./buttons/ThemeButton"
import NavItem from "./NavItems";
import Link from "next/link";
import { RiMenuFill } from 'react-icons/ri'
import { useEffect, useState } from 'react'

export default function SideNav() {

    const [nav, setNav ] = useState(true);

    return (
        <nav className={nav ? "h-screen w-56 bg-white dark:bg-[#343c48] shadow-md dark:shadow-gray-800 fixed top-0 left-0 ease-in duration-200 z-20"
                            : "h-screen w-56 bg-white dark:bg-[#343c48] shadow-md dark:shadow-gray-800 fixed top-0 -left-44 ease-in duration-200 z-20"}>
            <div className="flex flex-col gap-1 justify-center p-2">
            <div className="flex mt-2 mb-4">
                <Link className="p-2" href={'/home'}>
                    <h1 className="text-indigo-500 dark:text-indigo-400 text-3xl font-bold">wtfd?</h1>
                </Link>
                <button type="button" onClick={() => setNav(!nav)} className="my-auto ml-auto mr-1">
                    <RiMenuFill className="text-gray-700 dark:text-gray-50 hover:scale-110 ease-in duration-150" size={22}/>
                </button>
            </div>
               <NavItem path="/home" title="Families"/>
               <NavItem path="/home" title="Pods"/>
               <NavItem path="/home" title="Direct Messages"/>
            </div>
        </nav>
    )
}