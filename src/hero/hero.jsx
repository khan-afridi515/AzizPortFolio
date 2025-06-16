import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col py-20 justify-center items-center gap-6 bg-black'>
      <div className='w-30'>
        <img src="images/Aziz.jpg" className='w-[100%] rounded-full'></img>
      </div>
      <div className='sm:w-120 w-90'>
        <h1 className='text-2xl font-bold text-white w-[100%] text-center'>I am Aziz Ullah, Frontend Developer from Pakistan</h1>
        
      </div>
      <div className='sm:w-115 w-90'><p className='text-white w-[100%] text-center'>I am a frontend developer, with one year of experience in javascript, TypeScript, React js, Redux along with node js, express js and mongo db.</p></div>
      <div className='flex gap-4'>
        <button type="button" className='px-5 py-2 text-whtie bg-pink-500 rounded-full '>Connect with me</button>
        <button type="button" className='border border-pink-500 px-5 py-2 text-pink-500 rounded-full'>My Resumy</button>
      </div>
    </div>
  )
}

export default Hero
