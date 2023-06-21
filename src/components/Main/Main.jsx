import React from 'react'
import NavbarMain from '../Navbar/NavbarMain'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Skills from '../Skills/Skills'


function Main() {
  return (
    <>
        <NavbarMain/>
        <Home />
        <Skills />
        <Projects />
        <Contact />
        
    </>
  )
}

export default Main