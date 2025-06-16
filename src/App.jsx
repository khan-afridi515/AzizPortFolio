import React from 'react'
import Nav from './navbar/nav'
import Hero from './hero/hero'

const App = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <p className='text-red-500'>This is my portfolio website</p>
    </div>
  )
}

export default App
