import React from 'react'
import Nav from './navbar/nav'
import Hero from './hero/hero'
import AboutMe from './About/AboutMe'

const App = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <AboutMe/>
      <p className='text-red-500'>This is my portfolio website</p>
    </div>
  )
}

export default App
