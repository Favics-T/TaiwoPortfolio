import React from 'react'
import svg from './assets/svg.svg'
import Nav from './component/Nav'
import Hero from './component/Hero'

const App = () => {
  return (
    <div className=' h-screen  text-white flex flex-col gap-20 px-20 '>
     <Nav />
     <Hero />
    </div>
  )
}

export default App
