import React from 'react'
import "./hero.css";

const Hero = () => {
  return (
    <div className='flex flex-col py-50 px-8 justify-center items-center gap-6 bg-black'>
      <div className='w-30'>
        <img src="images/Aziz.jpg" className='w-[100%] rounded-full'></img>
      </div>
      <div className='sm:w-150 w-110'>
        <h1 className='text-3xl font-bold text-white w-[100%] text-center'>I am Aziz Ullah, Frontend Developer from Pakistan</h1>
        
      </div>
      <div className='sm:w-150 w-110'><p className='text-white md:w-[100%] w-[80%] text-center md:text-xl text-sm m-auto'>I am a frontend developer, with one year of experience in javascript, TypeScript, React js, Redux along with node js, express js and mongo db.</p></div>
      <div className='flex gap-4'>
        <button type="button" className='px-5 py-2 text-white bg-pink-500 rounded-full cnct'>Connect with me</button>
        <button type="button" className='border border-pink-500 px-5 py-2 text-pink-500 rounded-full resumy'>My Resumy</button>
      </div>
    </div>
  )
}

export default Hero
