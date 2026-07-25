
import React from 'react'
import {Route, Routes } from 'react-router'
import Login from '../pages/Login'
import Register from '../pages/Register'
import LeftSide from '../pages/LeftSide'
import Navbar from '../components/Navbar'
import LoginPage from '../components/LoginPage'
import Home from '../components/Home'
import Shop from '../components/Shop'
import About from '../components/About'
import Cart from '../components/Cart'
import ProductDetail from '../components/ProductDetail'



const MyRouter = () => {
  return (
    <div>
     <Routes>
      <Route path='/' element={<LoginPage />} />
      
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/about' element={<About />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/detail/:id' element={<ProductDetail />} />
 
     </Routes>
      
    </div>
  )
}

export default MyRouter
