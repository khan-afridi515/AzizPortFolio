import React from 'react'
import "./contact.css";

const Contacts = () => {
  return (
    <div className='bg-black py-16 px-16 w-full'>
        <h1 className='text-3xl text-white font-bold text-center mb-12'>Contact me</h1>

    <div className='flex md:flex-row flex-col md:justify-between md:gap-1 gap-15 justify-start w-full'>
        
    <div className='md:w-[46%] w-[95%] flex flex-col gap-5 text-white'>
        <h2 className='text-pink-500 text-2xl font-bold'>Let's talk</h2>
        <p>I am currently available to take on new project, so feel free to send me a message about new any thing that you want to on, you can contact anytime.</p>
        <div className='flex gap-3'>
        <i class="fa-solid fa-envelope pt-2"></i>
        <p>uaziz9164@gmail.com</p>
        </div>
        <div className='flex gap-3'>
        <i class="fa-solid fa-phone pt-2"></i>
        <p>+92 315 31 21 735</p>
        </div>
        <div className='flex gap-3'>
        <i class="fa-solid fa-location-dot pt-2"></i>
        <p>Tehsil Jamrud District Khyber</p>
        </div>
      </div>

      <div className='flex flex-col gap-4 md:w-[46%] w-[95%]'>
          <div className='flex flex-col gap-1 w-full'>
            <label className='text-white'>Your name</label>
            <input type="text"  className='w-full py-2 px-4 border border-white bg-gray-900 rounded-md outline-none text-white'></input>
          </div>
          <div className='flex flex-col gap-1 w-full'>
            <label className='text-white'>Your Email</label>
            <input type="email" className='w-full py-2 px-4 border border-white bg-gray-900 rounded-md outline-none text-white'></input>
          </div>
          <div className='flex flex-col gap-1 w-full'>
          <label className='text-white'>Your message</label>
          <textarea type="text" className='w-full h-30 rounded-md py-2 px-4 border border-white outline-none bg-gray-900 text-white'></textarea>
          </div>
          <div className='flex gap-1 w-full'>
            <button className='px-4 py-1 bg-blue-500 text-xl cursor-pointer rounded-md sbmt'>Submit</button>
          </div>
      </div>

    </div>
      
    </div>
  )
}

export default Contacts
