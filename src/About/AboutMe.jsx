import React from 'react'

const AboutMe = () => {
  return (
    <div className='py-14 px-16 bg-black'>

       <h1 className='text-center text-white text-3xl font-bold'>About Me</h1>
      <div className='flex gap-10 w-[100%] py-10'>
        <div className='w-[30%]'>
            <img src="images/Aziz.jpg" className='w-full'></img>
        </div>
        <div className='w-[70%] text-white'>
            <p>
                My name is Aziz Ullah, I have done matric education from GHS Hashim Abad Jamrud Distric Khyber with good marks.
                I got addmission in Islamia collage Peshawer for Fsc, where I succefully passed my Fsc exame with good marks in 2019.
                In 2020, I got addmission in Agriculture university Peshawer for Bs Computer Science, in 2024 I became graduated, with 3.11/4.00 GPA score.
                In this duration I worked on web development skills.
            </p>
            <p className='py-4'>
                After 2024 upto 2025 I worked on my webdevelopment skills, and I also complete navtcc three months mern stack course.
                in which I worked on multiple Front end Project. I successfully completed multiple real world Project.
            </p>
            <p>
                So, now I can work in Front End development Project, with HTML, Css, Java Script, React js and TailwinCss.
            </p>
            
        </div>
      </div>
    </div>
  )
}

export default AboutMe
