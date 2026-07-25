import React, { useContext } from 'react'
import HomeMain from './HomeMain'
import Navbar from './Navbar'

import { MyStore } from '../contex/MyContext'
import Search from './SearchBar'

const Home = () => {

  



  return (
     <div className="min-h-screen bg-[#0b0b0b] text-white">

       <Navbar />
     

      <div className="max-w-7xl mx-auto px-5 py-10">

       <HomeMain />

      

       

      </div>

    </div>
  )
}

export default Home
