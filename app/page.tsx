import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex border h-screen'>
        <div className='p-6 flex flex-col gap-8 mx-auto mt-40 w-full max-w-7xl text-center'>
          <h1 className='text-gray-700 text-5xl font-bold'>Wanna keep in touch with the family?</h1>
          <h1 className='text-gray-700 text-5xl font-bold'>But don't want grandma all up in your instagram?</h1>
          
          <div className='flex gap-4 mx-auto'>
          <h1 className='text-gray-700 text-5xl font-bold'>Introducing: </h1>
          <h1 className='text-indigo-500 text-5xl font-bold'>What The Fam Doing?</h1>
          </div>
          

          <h1 className='text-indigo-500 mt-20 text-xl font-bold cursor-pointer rounded-lg border-2 border-indigo-500
          w-fit mx-auto pt-3 pb-4 px-5 hover:bg-indigo-500 hover:text-white ease-in duration-100'>Sign Up Now</h1>
        </div>
    </main>
  )
}
