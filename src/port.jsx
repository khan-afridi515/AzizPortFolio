import React from 'react'
import Nav from './navbar/nav'
import Hero from './hero/hero'
import AboutMe from './About/AboutMe'
import Skill from './Skills/skill'
import Train from './Training/Train'
import Services from './service/services'
import Project from './Project/projects'
import Contacts from './contact/contacts'


const Port = ({sendItem}) => {
  return (
    <div className='w-full'>
      <Nav/>
      <div className=''>
      <section className="w-full" id="hero"><Hero/></section>
      <section className="w-full" id="about"><AboutMe/></section>
      <section className="w-full" id="train"><Train/></section>
      <section className="w-full" id="skill"><Skill/></section>
      <section className="w-full" id="service"><Services sendData={sendItem}/></section>
      <section className="w-full" id="projecct"><Project/></section>
      <section className="w-full" id="contact"><Contacts/></section>
      </div>
      
    </div>
  )
}

export default Port
