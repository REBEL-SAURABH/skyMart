import React from 'react'
import LeftSide from '../pages/LeftSide'
import Login from '../pages/Login'

const LoginPage = () => {
  return (
    <div>
       <div className="min-h-screen bg-black text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <LeftSide />

        <div className="flex items-center justify-center p-6 sm:p-10">
          <Login />
        </div>
      </div>

     
    </div>
      
    </div>
  )
}

export default LoginPage
