import React from 'react'
import "./project.css";
const Project = () => {


  const MernProject = [
    {
      name : "Social Media Integration Website",
      description : "In this website a person can integrate facebook, instagram, linkedIn and youtube account, and can also post from this website to its all platform by one click.",
      github1 : "https://github.com/khan-afridi515/social_media_integration.git",
      github2 : "https://github.com/khan-afridi515/youtubeBackend.git"
    },
    {
      name : "Course Registration System",
      description : "This website is for education institute, in which students can register for courses, and can also see the details of courses, and can also see the details of teachers, here is also admin panel for admin to manage the courses , students and teachers.",
      github1 : "https://github.com/khan-afridi515/Registration_Project.git",
      github2 : "https://github.com/khan-afridi515/Registration_Project.git"
    },
    {
      name : "Ecommerace website",
      description : "This website is for online shopping, in which a person can buy products online, and can also see the details of products, and can also see the details of sellers, here is also admin panel for admin to manage the products, customers and sellers.",
      github1 : "https://github.com/khan-afridi515/E-commerace-Front-End.git",
      github2 : "https://github.com/khan-afridi515/E-Commerace-Back-end.git"
    },
    {
      name : "Point of Sale System",
      description : "This system is for retail stores admin panel, in which admin can manage the products, customers and orders, here is also a dashboard for admin to see the sales and revenue of the store.",
      github1 : "https://github.com/khan-afridi515/PosSystem.git",
      github2 : "https://github.com/khan-afridi515/BackendRepo.git"
    }

  ]

  const items = [
    {
      name : "Add2Gram",
      cover: "shots/addTogram.png",
      github : "https://github.com/khan-afridi515/Add2Gram.git"
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

  const items3 = [
    {
      name : "Back End Project (POS)",
      cover: "shots/backend.jpg",
      github: "https://github.com/khan-afridi515/BackendRepo.git"
    }
  ]

  return (
    <div className='w-full bg-black py-16 sm:px-16 px-8'>
      <h1 className='text-3xl font-bold text-center pb-1 text-white'>Projects</h1>
      <p className='text-white text-center pb-10'>Click the photo to access the project</p>
      <h2 className='text-2xl font-bold text-yellow-200 py-5'>React Js, Tailwind Css Projects</h2>
      <div className='flex flex-wrap justify-center items-center gap-6 '>
        
        {
          items.map((app)=>{
            return(
              <a href={app.github} className='md:w-[21%] sm:w-[47%] w-[95%]'><div className='w-full cursor-pointer project1'>
                <img className="w-full" src={app.cover}></img>
                <h1 className='text-xl text-red-500 font-bold mt-1'>{app.name}</h1>
              </div></a>
            )
          })
        }
      </div>

      <h2 className='text-2xl font-bold text-yellow-200 pt-10 pb-5'> HTML CSS Javascript</h2>
      <div className='flex flex-wrap justify-center items-center gap-6 '>
        
        {
          items2.map((web)=>{
            return(
              <a href={web.github} className='md:w-[21%] sm:w-[47%] w-[95%]'><div className='w-full cursor-pointer project2'>
                <img className="w-full" src={web.cover}></img>
                <h1 className='text-xl text-red-500 font-bold mt-1'>{web.name}</h1>
              </div></a>
            )
          })
        }
      </div>

      

      <h2 className='text-2xl font-bold text-yellow-200 pt-10 pb-5'>Mern Stack Projects</h2>
      <div className='w-full  flex gap-5 flex-wrap'>
          {
            MernProject.map((project)=>{ 
              return(
                <div className='sm:w-[32%] w-[98%] sm:h-78 h-132 flex flex-col sm:gap-4 gap-6 bg-gray-900 py-6 px-5 rounded-md border border-gray-500 project2'>
                <h2 className='text-xl text-white font-bold'>{project.name}</h2>
                <p className='text-gray-400'>{project.description}</p>
                <div className='flex sm:flex-row flex-col gap-3'>
                  <p className='py-1 self-left px-2 rounded-[3px] text-[14px] bg-pink-300'>React.js</p>
                  <p className='py-1 px-2 rounded-[3px] text-[14px] bg-pink-300'>Mongo db</p>
                  <p className='py-1 px-2 rounded-[3px] text-[14px] bg-pink-300'>Express.js</p>
                  <p className='py-1 px-2 rounded-[3px] text-[14px] bg-pink-300'>Node.js</p>
                </div>
    
                <div className='flex gap-5 pt-2'>
                  <div className='flex gap-2'>
                  <i className="fa-brands fa-github text-xl pt-0.5"></i>
                  <a href={project.github1}><h3 className='text-gray-500 text-[16px] '>Front End</h3></a>
                  </div>
                  <div className='flex gap-2'>
                  <i className="fa-brands fa-github text-xl pt-0.5"></i>
                  <a href={project.github2}><h3 className='text-gray-500 text-[16px] '>Back End</h3></a>
                  
                  </div>
                </div>
    
              </div>
              )
            })
          }
          

      </div>

    </div>
  )
}

export default Project
