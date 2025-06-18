import React from 'react'

const Project = () => {

  const items = [
    {
      name : "E-Commerace",
      cover: "shots/watch.png",
      github : "https://github.com/khan-afridi515/E-commerace-Front-End.git"
    },
    {
      name : "Education website",
      cover: "shots/education.png",
      github: "https://github.com/khan-afridi515/Educational-website.git"
    },
    {
        name : "blog website",
        cover: "shots/blogging.png",
        github: "https://github.com/khan-afridi515/BlogWebsite.git"
    },
    {
      name : "Todo List App",
      cover: "shots/todolist.png",
      github: "https://github.com/khan-afridi515/ReactTodo.git"
    }
  ]
  return (
    <div className='bg-black py-20 px-16'>
      <h1 className='text-3xl font-bold text-center pb-10 text-white'>Projects</h1>
      <h2 className='text-2xl font-bold text-yellow-200 py-5'>React Js Projects</h2>
      <div className='flex gap-8 '>
        
        {
          items.map((app)=>{
            return(
              <a href={app.github} className='w-[23%]'><div className='w-full cursor-pointer'>
                <img className="w-full" src={app.cover}></img>
                <h1 className='text-xl text-red-500 font-bold mt-1'>{app.name}</h1>
              </div></a>
            )
          })
        }
      </div>
    </div>
  )
}

export default Project
