import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex border h-screen'>
        <div className='flex flex-col gap-4 mx-auto mt-40 max-w-7xl'>
          <h1 className='text-gray-700 text-5xl font-bold'>First they took Facebook, then they took Instagram</h1>
          <h1 className='text-gray-700 text-5xl font-bold'>What's next, your snapchat?</h1>
          <h1 className='text-gray-700 text-5xl font-bold'>Screw that..It's time for something new</h1>
        </div>
    </main>
  )
}
