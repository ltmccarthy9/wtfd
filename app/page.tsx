
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className='flex border h-screen'>
        <div className='p-6 flex flex-col gap-8 mx-auto mt-40 w-full max-w-7xl text-center text-gray-700 dark:text-gray-50'>
          <h1 className='text-5xl font-bold'>Wanna keep in touch with the family?</h1>
          <h1 className='text-5xl font-bold'>But don't want grandma all up in your instagram?</h1>
          
          <div className='flex flex-wrap gap-4 mx-auto'>
          <h1 className='text-gray-700 dark:text-gray-50 text-5xl font-bold mb-2'>Introducing: </h1>
          <h1 className='text-indigo-500 text-5xl font-bold'>What The Fam Doing?</h1>
          </div>
          

          <a className='mt-20 text-xl font-bold cursor-pointer rounded-lg w-fit mx-auto py-3 px-5
           bg-indigo-500 text-gray-50 hover:bg-indigo-600 ease-in duration-100'>Sign Up Now</a>
        </div>

        
    </main>
  )
}
