import React from 'react'
import Social from './Social'

const About = () => {
  return (
    <div className='h-screen flex flex-col bg-indigo-500 w-full justify-center'>
      <div id='about' className='flex flex-col gap-4 sm:justify-between sm:flex-row p-2 mb-20 mx-auto max-w-6xl'>
        <div className='flex flex-col w-full sm:w-1/2'>
            <h2 className=' text-gray-50 text-4xl font-bold mb-2'>About</h2>
            <p className='text-md text-gray-50'>What The Fam Doing? is the social media platform created specificially for your
            family.  At the end of the day, Grandma just wants to know what her fam is doing; not be bombarded by memes and click-bait articles.
                Bring your entire family over here and let's make staying in contact with the fam a whole lot simpler.
            </p>
        </div>
        <div className='m-auto'>
            <Social/>
        </div>
      </div>
    </div>
  )
}

export default About
