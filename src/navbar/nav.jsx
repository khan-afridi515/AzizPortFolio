import React, {useRef} from 'react'
import {Link} from "react-scroll"
import "./nav.css"
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
    <div className='fixed top-0 left-0 w-full'>
      <div className=' flex justify-between px-16 py-4 bg-black mx-auto'>
        <div className='mt-2'>
             <h1 className='text-3xl font-bold text-white'>Aziz Ullah</h1>
        </div>
        <div className='md:r-0 r-[-365px]'>
          
         <div className='flex gap-4 items-end justify-end md:hidden block mt-3'>
           <div className='md:hidden block cursor-pointer' ref={bar} onClick={show}>
          <i class="fa-solid fa-bars-staggered text-white text-2xl "></i>
          </div>
           
           <div className='hidden cursor-pointer' ref={time} onClick={hide}>
           <i class="fa-regular fa-circle-xmark text-white text-2xl"></i>
           </div> 
           
        </div> 
        <div className='md:block hidden w-full' ref={list}>
        <ul className='flex md:flex-row flex-col lg:gap-5 gap-3 justify-center items-end mt-4 text-white font-bold lg:text-xl text-md'>
        <Link to="hero" smooth={true} duration={600} className="mr-4 cursor-pointer"><li className="navigate">Home</li></Link>
        <Link to="about" smooth={true} duration={600} className="mr-4 cursor-pointer"><li className="navigate">About</li></Link>
        <Link to="train" smooth={true} duration={600} className="mr-4 cursor-pointer"><li className="navigate">Training</li></Link>
        <Link to="skill" smooth={true} duration={600} className="mr-4 cursor-pointer"><li className="navigate">Skills</li></Link>
        <Link to="service" smooth={true} duration={600} className="mr-4 cursor-pointer"><li className="navigate">Services</li></Link>
        <Link to="projecct" smooth={true} duration={600} className="mr-4 cursor-pointer"><li className="navigate">Projects</li></Link>
        </ul>
        </div>
           
        </div>
        <Link to="contact" smooth={true} duration={500} className="mr-4 cursor-pointer md:block hidden mt-1">
        <div className='md:block hidden'>
            <button className=' border py-2 px-4 bg-blue-500 text-white rounded-full cursor-pointer btn'>Contact with me</button>
        </div>
        </Link>

      </div>

   
    </div>
  )
}

export default Nav
