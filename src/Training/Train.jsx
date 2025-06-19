import React from 'react'

const Train = () => {
    const element = [
        {
            course : "Mern Stack development (React js, Tailwind Css, Express js, Node js, Mongo DB)",
            duration : "3 Months",
            Institute : "Encoder Bytes Peshawer under Navtcc 2025",
            learn : "I learnt mern stack development, working react js, tailwind css, express js , node js and Mongo DB to build interactive and responsive front end layout and can also work in back end project"
        },
        {
            course : "Computer Operator",
            duration : "6 Months",
            Institute : "Government technical teachers training center",
            learn : "I become able to create interactive document ms word, making presentation, can perform accounting in excel and can also work in access"
        }
    ]
  return (
    <div className='px-16 py-16 bg-black'>
        <h1 className='text-center text-white text-3xl font-bold'>Training and Certification</h1>
      <div className='w-full flex md:flex-row md-justify-start justify-center items-center flex-col gap-8 my-8'>
          {
            element.map((item)=>{
                return(
                    <div className='p-4 bg-gray-600 rounded-md md:w-[50%] w-[90%] min:h-80 flex flex-col gap-3 text-white'>
                        <div className='flex flex-col w-full'>
                        <h3 className='font-bold'>Course Name  </h3>
                        <h3 className=''>{item.course}</h3>
                        </div>
                        
                        <div className='flex flex-col'>
                        <label className='font-bold'>Duration </label>
                        <p>{item.duration}</p>
                        </div>
                        
                        <div className='flex flex-col'>
                        <label className='font-bold'>Institute </label>
                        <p>{item.Institute}</p>
                        </div>
                        
                        <div className='flex flex-col'>
                        <label className='font-bold inline w-50'>What to learn </label>
                        <p>{item.learn}</p>
                        </div>
                    </div>
                )
            })
          }
      </div>
    </div>
  )
}

export default Train
