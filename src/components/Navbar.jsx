import { Bolt, LogOut, ShoppingCart , Menu, X } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router'
import { MyStore } from '../contex/MyContext'

const Navbar = () => {

  const {LoginUser} = useContext(MyStore);
  const Navigate = useNavigate();

  const [menuOpen , setMenuOpen] =  useState(false);
  return (
     <header className="sticky top-0 z-50 bg-[#0b0b0b] border-b border-zinc-800">
      <div className="max-w-7xl mx-auto h-20 px-5 flex items-center justify-between">

        {/* Logo */}

        <div className="flex items-center gap-3 cursor-pointer">

          <div className="w-11 h-11 rounded-xl bg-lime-400 flex items-center justify-center">
            <Bolt className="text-black fill-black" size={22} />
          </div>

          <h1
          onClick={() => {Navigate('/home')}}
          className="text-3xl font-bold text-white">
            Sky<span className="text-lime-400">Mart</span>
          </h1>

        </div>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex gap-10 text-[17px] font-medium">

          <button
          onClick={() => {
            Navigate('/home')
          }}
          className="text-lime-400 hover:text-white transition">
            Home
          </button>

          <button 
          onClick={() => {Navigate("/shop")}}
          className="text-lime-400 hover:text-white transition">
            Shop
          </button>

          <button
          onClick={() => {Navigate('/about')}}
          className="text-lime-400 hover:text-white transition">
            About
          </button>

        </nav>

        {/* Right */}

        <div className="hidden lg:flex items-center gap-4">

          <div className="border border-zinc-700 rounded-xl px-4 py-2 flex items-center gap-3">

            <div className="w-9 h-9 rounded-lg bg-lime-400 text-black font-bold flex items-center justify-center">
              S
            </div>

            <span className="text-white font-medium">
              {LoginUser.name}
            </span>

          </div>

          <button onClick={() => {
            Navigate('/cart')
          }} className="w-12 h-12 rounded-xl border border-zinc-700 flex justify-center items-center hover:border-lime-400 transition">

            <ShoppingCart
              size={20}
              className="text-white"
            />

          </button>

          <button
          onClick={() => {Navigate("/")}}
          className="w-12 h-12 rounded-xl border border-zinc-700 flex justify-center items-center hover:border-red-500 transition">

            <LogOut
              size={20}
              className="text-white"
            />

          </button>

        </div>

        {/* Mobile */}

        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="text-white" />
          ) : (
            <Menu className="text-white" />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="lg:hidden border-t border-zinc-800 bg-[#0b0b0b]">

          <div className="px-5 py-5 flex flex-col gap-5">

            <button
            onClick={() => {Navigate("/home")}}
            className="text-left text-lime-400">
              Home
            </button>

            <button 
            onClick={() => {Navigate("/shop") }}
            className="text-left text-lime-400">
              Shop
            </button>

            <button
            onClick={() => {Navigate("/about")}}
            className="text-left text-lime-400">
              About
            </button>

            <hr className="border-zinc-800" />

            <button className="flex items-center gap-3 text-white">

              <ShoppingCart size={18} />

              Cart

            </button>

            <button 
            onClick={() => {Navigate("/")}}
            className="flex items-center gap-3 text-white">

              <LogOut size={18} />

              Logout

            </button>

          </div>

        </div>
      )}
    </header>
  )
}

export default Navbar
