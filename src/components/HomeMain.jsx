import { ArrowRight, Package, ShoppingBag, Truck } from 'lucide-react'
import React, { useContext } from 'react'
import { MyStore } from '../contex/MyContext'
import { useNavigate } from 'react-router'

const HomeMain = () => {

  const Navigate = useNavigate();

  const {LoginUser} = useContext(MyStore);
  return (
    <section className="mt-10">

      <div className="grid lg:grid-cols-2 gap-10 items-center">

        {/* Left */}

        <div>

          <p className="uppercase tracking-[5px] text-lime-400 font-semibold mb-5">
            Good Afternoon 👋
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Welcome back,
            <br />
            <span className="text-white">{LoginUser.name}!</span>
          </h1>

          <p className="text-gray-400 text-lg mt-8 max-w-xl leading-8">
            Discover today's picks, manage your cart and explore
            thousands of amazing products at unbeatable prices.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button
            onClick={() => {Navigate('/shop')}}
            className="bg-lime-400 hover:bg-lime-300 transition px-7 py-4 rounded-2xl text-black font-semibold flex items-center gap-3">

              <ShoppingBag size={20} />

              Shop Now

            </button>

            <button
            onClick={() => {Navigate('/shop')}}
            className="border border-zinc-700 hover:border-lime-400 transition px-7 py-4 rounded-2xl flex items-center gap-3">

              View Products

              <ArrowRight size={20} />

            </button>

          </div>

        </div>

        {/* Right */}

        <div className="grid gap-6">

          {/* Card 1 */}

          <div className="bg-[#121212] border border-zinc-800 rounded-3xl p-7">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-400">
                  Products Available
                </p>

                <h1 className="text-5xl font-bold mt-2">
                  20+
                </h1>

              </div>

              <div className="w-16 h-16 rounded-2xl bg-lime-400 flex justify-center items-center">

                <Package
                  className="text-black"
                  size={30}
                />

              </div>

            </div>

          </div>

          {/* Card 2 */}

          <div className="bg-[#121212] border border-zinc-800 rounded-3xl p-7">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-400">
                  Delivery
                </p>

                <h1 className="text-3xl font-bold mt-2">
                  Free over ₹999
                </h1>

              </div>

              <div className="w-16 h-16 rounded-2xl bg-lime-400 flex justify-center items-center">

                <Truck
                  className="text-black"
                  size={30}
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default HomeMain
