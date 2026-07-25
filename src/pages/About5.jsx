import { Bolt } from 'lucide-react'
import React from 'react'

const About5 = () => {
  return (
   <footer className="border-t border-zinc-800 py-10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col items-center gap-5">

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-full bg-lime-400 flex items-center justify-center">

              <Bolt
                className="text-black"
                size={20}
              />

            </div>

            <h1 className="text-3xl font-bold">

              Sky
              <span className="text-lime-400">
                Mart
              </span>

            </h1>

          </div>

          <p className="text-gray-500 text-center">
            © 2025 SAURABH • Built with React + Redux +
            TanStack Query
          </p>

        </div>

      </div>

    </footer>
  )
}

export default About5
