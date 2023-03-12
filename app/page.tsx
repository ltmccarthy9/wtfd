
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from './components/Nav'
import About from './components/Landing/About'
import Connect from './components/Landing/Connect'
import SignUpButton from './components/buttons/SignUpButton'
import HomeSVG from './components/Landing/HomeSVG'

const inter = Inter({ subsets: ['latin'] })

export default function Landing() {

  return (
    <main id='landing' className='flex flex-col'>
      <Nav/>
        <div className='h-screen p-6 flex flex-col gap-2 mx-auto mt-16 sm:mt-28 w-full max-w-7xl text-4xl md:text-5xl
         font-bold text-center text-gray-700 dark:text-gray-50'>
          <h1>Wanna keep in touch with your family?</h1>
          <h1 className=' font-light text-2xl md:text-3xl'>But don't want grandma all up in your instagram?</h1>
          
          <HomeSVG/>
          <div className='flex flex-wrap gap-4 mx-auto mt-4 sm:mt-8 text-3xl md:text-4xl'>
          <h1 className='text-gray-700 dark:text-gray-50 font-bold mb-2 mx-auto'>Introducing: </h1>
          <h1 className='text-indigo-500 dark:text-indigo-400 font-bold mx-auto sm:mb-4'>What The Fam Doing?</h1>
          </div>
        
          <SignUpButton px='px-20' text='text-lg' m='' display='flex' />
        </div>
            <About/>
            <Connect />
    </main>
  )
}
