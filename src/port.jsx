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
    <div>
      <Nav/>
      <section id="hero"><Hero/></section>
      <section id="about"><AboutMe/></section>
      <section id="train"><Train/></section>
      <section id="skill"><Skill/></section>
      <section id="service"><Services sendData={sendItem}/></section>
      <section id="projecct"><Project/></section>
      <section id="contact"><Contacts/></section>
    </div>
  )
}

export default Port
