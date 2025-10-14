import React from 'react'
import { Link } from 'react-router-dom'

const Service = ({digit, title, explain}) => {
  return (
    <div className='bg-black text-center flex justify-center py-20'>
      <div className='border border-white py-8 px-5 flex flex-col gap-5 w-170'>
        <h3 className='text-xl text-white font-bold'>0{digit}</h3>
        <h1 className='text-2xl font-bold text-pink-500'>{title}</h1>
        <p className='text-white'>{explain}</p>
        <Link to="/" className="mr-4 cursor-pointer"><h2 className='bg-blue-500 p-2 rounded-md cursor-pointer w-30 '>Go Back</h2></Link>
      </div>
    </div>
  )
}

export default Service
