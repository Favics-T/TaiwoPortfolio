import React from 'react'
import svg from './assets/svg.svg'
import Nav from './component/Nav'
import Hero from './component/Hero'
import About from './component/About'
import Skills from './component/Skills'
import Project from './component/Project'
import Experience from './component/Experience'
import Footer from './component/Footer'
import Contact from './component/Contact'

const App = () => {
  return (
    <div className=' h-screen font-[Inter]  text-white flex flex-col gap-20 px-20 '>
     <Nav />
     <Hero />
     <About />
     <Experience />
     <Skills />
     <Project />
     <Contact />
     <Footer />
    </div>
  )
}

export default App
