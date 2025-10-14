import React from 'react'
import "./project.css";
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

  const items2 = [
    {
      name : "Food Website",
      cover: "shots/foodWebsite.png",
      github : "https://github.com/khan-afridi515/Food-Website.git"
    },
    {
      name : "Quiz App",
      cover: "shots/quizApp.png",
      github: "https://github.com/khan-afridi515/Quiz-App.git"
    },
    {
        name : "Weather app",
        cover: "shots/weatherApp.png",
        github: "https://github.com/khan-afridi515/weather-app.git"
    },
    {
      name : "Colculator",
      cover: "shots/colculator.png",
      github: "https://github.com/khan-afridi515/coluculator.git"
    }
  ]

  return (
    <div className='w-full bg-black py-16 px-16'>
      <h1 className='text-3xl font-bold text-center pb-1 text-white'>Projects</h1>
      <p className='text-white text-center pb-10'>Click the photo to access the project</p>
      <h2 className='text-2xl font-bold text-yellow-200 py-5'>React Js Projects</h2>
      <div className='flex flex-wrap justify-center items-center gap-8 '>
        
        {
          items.map((app)=>{
            return(
              <a href={app.github} className='md:w-[23%] sm:w-[47%] w-[95%]'><div className='w-full cursor-pointer project1'>
                <img className="w-full" src={app.cover}></img>
                <h1 className='text-xl text-red-500 font-bold mt-1'>{app.name}</h1>
              </div></a>
            )
          })
        }
      </div>

      <h2 className='text-2xl font-bold text-yellow-200 pt-10 pb-5'> HTML CSS Javascript</h2>
      <div className='flex flex-wrap justify-center items-center gap-8 '>
        
        {
          items2.map((web)=>{
            return(
              <a href={web.github} className='md:w-[23%] sm:w-[47%] w-[95%]'><div className='w-full cursor-pointer project2'>
                <img className="w-full" src={web.cover}></img>
                <h1 className='text-xl text-red-500 font-bold mt-1'>{web.name}</h1>
              </div></a>
            )
          })
        }
      </div>

    </div>
  )
}

export default Project
