
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import About from './components/Landing/About'
import Connect from './components/Landing/Connect'
import SignUpButton from './components/buttons/SignUpButton'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <main id='landing' className='flex flex-col'>
        <div className='h-screen p-6 flex flex-col gap-8 mx-auto mt-20 sm:mt-40 w-full max-w-7xl text-4xl md:text-5xl
         font-bold text-center text-gray-700 dark:text-gray-50'>
          <h1>Wanna keep in touch with the family?</h1>
          <h1 className='font-semibold text-2xl md:text-3xl'>But don't want grandma all up in your instagram?</h1>
          
          <div className='flex flex-wrap gap-4 mx-auto mt-20 text-4xl md:text-5xl'>
          <h1 className='text-gray-700 dark:text-gray-50 font-bold mb-2 mx-auto'>Introducing: </h1>
          <h1 className='text-indigo-500 dark:text-indigo-400 font-bold mx-auto'>What The Fam Doing?</h1>
          </div>
        
          <SignUpButton px='px-20' text='text-lg' m='' display='flex' />
        </div>

     
            <About/>
            <Connect />
      
 
    </main>
  )
}
