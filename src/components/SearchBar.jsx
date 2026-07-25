import {Search, SlidersHorizontal } from 'lucide-react'
import React, { useContext } from 'react'
import { MyStore } from '../contex/MyContext'

const SearchBar = () => {
const {query , setQuery} = useContext(MyStore)

  return (
    <div className="w-full flex items-center justify-center py-8">
  <div className="w-full max-w-3xl flex items-center gap-3">

    {/* Search Bar */}
    <div className="flex items-center flex-1 bg-[#111111] border border-gray-800 rounded-2xl px-5 h-14 shadow-lg hover:border-lime-400 transition-all duration-300">

      <Search
        size={20}
        className="text-gray-500"
      />

      <input
      onChange={(e) => {setQuery(e.target.value)}}
      value={query}
        type="text"
        placeholder="Search products, brands, categories..."
        className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-500 px-4"
      />

      <button className="bg-lime-400 hover:bg-lime-300 transition-all duration-300 text-black px-5 py-2 rounded-xl font-semibold">
        Search
      </button>

    </div>

    {/* Filter Button */}
    <button className="h-14 w-14 flex items-center justify-center rounded-2xl border border-gray-800 bg-[#111111] hover:bg-lime-400 hover:text-black transition-all duration-300">
      <SlidersHorizontal size={20} />
    </button>

  </div>
</div>
  )
}

export default SearchBar
