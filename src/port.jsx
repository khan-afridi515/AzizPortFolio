import React from 'react'
import Nav from './navbar/nav'
import Hero from './hero/hero'
import AboutMe from './About/AboutMe'
import Skill from './Skills/skill'
import Train from './Training/Train'
import Services from './service/services'
import Project from './Project/projects'


const Port = ({sendItem}) => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <AboutMe/>
      <Train/>
      <Skill/>
      <Services sendData={sendItem}/>
      <Project/>
    </div>
  )
}

export default Port
