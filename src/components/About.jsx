import React from 'react'
import Navbar from './Navbar'
import About1 from '../pages/About1'
import About2 from '../pages/About2'
import About3 from '../pages/About3'
import About5 from '../pages/About5'

const About = () => {
  return (
    <div className="bg-[#0b0b0b] min-h-screen text-white">
      <Navbar />
     <About1 />
     <About2 />
     <About3 />
     <About5 />
    </div>
  )
}

export default About
