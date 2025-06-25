import React, {useRef} from 'react'
import {Link} from "react-scroll"
const Nav = () => {

   const bar = useRef();
   const time = useRef();
   const list = useRef();

   function show(){
    bar.current.style.display="none";
    time.current.style.display="block";
    list.current.style.display="block";
   }

   function hide(){
    bar.current.style.display="block";
    time.current.style.display="none";
    list.current.style.display="none";
   }

  return (
    <div>
      <div className='flex justify-between px-16 py-4 bg-black'>
        <div className='mt-2'>
             <h1 className='text-2xl font-bold text-white'>Aziz Ullah</h1>
        </div>
        <div className='md:r-0 r-[-365px]'>
          
         <div className='flex gap-4 items-center md:hidden block'>
           <div className='md:hidden block cursor-pointer' ref={bar} onClick={show}>
          <i class="fa-solid fa-bars-staggered text-white text-2xl "></i>
          </div>
           
           <div className='hidden cursor-pointer' ref={time} onClick={hide}>
           <i class="fa-regular fa-circle-xmark text-white text-2xl"></i>
           </div> 
           
        </div> 
        <div className='md:block hidden w-full' ref={list}>
        <ul className='flex md:flex-row flex-col lg:gap-5 gap-3 justify-center items-start mt-2 text-white font-bold text-xl '>
        <Link to="hero" smooth={true} duration={600} className="mr-4 cursor-pointer"><li >Home</li></Link>
        <Link to="about" smooth={true} duration={600} className="mr-4 cursor-pointer"><li>About</li></Link>
        <Link to="train" smooth={true} duration={600} className="mr-4 cursor-pointer"><li>Training</li></Link>
        <Link to="skill" smooth={true} duration={600} className="mr-4 cursor-pointer"><li>Skills</li></Link>
        <Link to="service" smooth={true} duration={600} className="mr-4 cursor-pointer"><li>Services</li></Link>
        <Link to="projecct" smooth={true} duration={600} className="mr-4 cursor-pointer"><li>Projects</li></Link>
        </ul>
        </div>
           
        </div>
        <Link to="contact" smooth={true} duration={500} className="mr-4 cursor-pointer">
        <div className='md:block hidden'>
            <button className=' border py-2 px-4 bg-blue-500 text-white rounded-full cursor-pointer'>Contact with me</button>
        </div>
        </Link>

      </div>

      {/* <div className='flex flex-col py-8 px-5 gap-1 bg-black w-55 float-right hidden' ref={list}>

      <div>
            <ul className='flex flex-col gap-3 justify-center items-center mt-2 text-white font-bold'>
                <li>Home</li>
                <li>About</li>
                <li>Education</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='text-center pt-6'>
            <button className=' border py-2 px-4 bg-blue-500 text-white rounded-md'>Contact with me</button>
        </div>

      </div> */}
    </div>
  )
}

export default Nav
