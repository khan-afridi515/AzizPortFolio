import React from 'react'
import {Link} from 'react-router-dom';
const Services = ({sendData}) => {
    const work = [
        {
            name : "Web Development",
            details : "I am a webdeveloper, I can develop website, software and web application. I can develop interactive and responsive frontend layout, I can also work in back end technology through which I can create databases, send data to data bases perform some operation on it, and then can also send to frontend."
        },
        {
            name : "Computer Operator",
            details : "I can also work as an computer operator, in which I can perform working with creating documents in ms word, I can create interactive presentation in power point, I can work in excel, same as I can create databases and stores in databases and can store data in databases."
        },
        {
            name : "Blog writter",
            details : "I'm a passionate blog writer specializing in tech tutorials and productivity tips. I write with a clear, beginner-friendly voice to make complex topics simple. I use Notion to plan blog outlines, do keyword research using Google Trends, and proofread using Grammarly before publishing."
        },
        {
            name : "Logo Designer",
            details: "I am a logo designer, I can make the logo which will clearly show your business, your organization identity and aim, my logo will be able to fit on any kind things such as on caps, shirts, on website and other things"
        }
    ]
  return (
    <div className='w-full bg-black py-20 px-16'>
        <h1 className='text-2xl font-bold text-center text-white'>My Services</h1>
      <div className='flex gap-8 flex-wrap justify-center items-center w-full py-8'>
        {
            work.map((service, index)=>{
                return(
                    <div className='border border-white py-3 px-2 flex flex-col gap-4 lg:w-[23%] md:w-[45%] w-[95%] h-60 rounded-md'>
                        <h3 className='text-white text-xl font-bold'>0{index+1}</h3>
                        <h1 className='text-2xl font-bold text-pink-500 '>{service.name}</h1>
                        <p className='text-white overflow-hidden'>{service.details}</p>
                        <Link to="service"><p className='pt-4 text-pink-500' onClick={()=>sendData(service, index)}>Read More</p></Link>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Services
