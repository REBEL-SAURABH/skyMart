import React, { useContext } from 'react'
import { MyStore } from '../contex/MyContext';
import { useNavigate } from 'react-router';

const Cart = () => {
  const {cartItems , increment , decrement , deleteItem } = useContext(MyStore);
  const Navigate = useNavigate();
  console.log(cartItems)


  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
   <div className="min-h-screen bg-zinc-950 text-white">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-8 py-8 border-b border-zinc-800">
  <div className="flex justify-between items-center">

    <div>
      <h1 className="text-5xl font-bold">Shopping Cart</h1>

      <p className="text-zinc-400 mt-2">
        {cartItems.length} Item{cartItems.length > 1 && "s"}
      </p>
    </div>

    <button
      onClick={() => Navigate("/shop")}
      className="px-6 py-3 rounded-xl bg-lime-500 text-black font-semibold hover:bg-lime-400 duration-300"
    >
      Continue Shopping
    </button>

  </div>
</div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-8 py-8 space-y-8">

        {cartItems.map((item) => (
          <div
  key={item.id}
  className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8 hover:border-lime-500 hover:shadow-2xl hover:shadow-lime-500/10 transition-all duration-300"
>

            <div className="grid grid-cols-12 gap-8 items-center">

              {/* Image */}
             <div className="col-span-3">

                   <img
                      src={item.thumbnail}
                         alt={item.title}
                           className="w-full h-72 rounded-2xl object-cover bg-zinc-800"
                                 />

                      </div>

              {/* Details */}
             <div className="col-span-6">
              

                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold mt-3">
                      {item.title}
                             </h2>

                  <span className="bg-lime-500 text-black text-xs px-2 py-1 rounded-full h-fit">
                    {item.category}
                  </span>
                </div>

                <p className="text-zinc-400 mt-2 text-lg">
                         {item.brand}
                                </p>

                <p className="text-zinc-500 mt-5 leading-7">
                   {item.description}
                         </p>

                <div className="flex items-center gap-3 mt-3">

                  <span className="text-2xl font-bold text-lime-400">
                    ${item.price}
                  </span>

                  <span className="text-red-400 text-sm">
                    -{item.discountPercentage}%
                  </span>

                </div>

                <div className="flex items-center gap-4 mt-2 text-sm">

                  <span className="text-yellow-400">
                    ⭐ {item.rating}
                  </span>

                  <span className="text-green-400">
                    {item.availabilityStatus}
                  </span>

                </div>

                <div className="flex justify-between items-center mt-4">

                  {/* Quantity */}
                  <div className="flex items-center gap-3">

                    <button
                    onClick={() => {
                            decrement(item.id)
                               }}
                    className="w-9 h-9 rounded-lg bg-zinc-800 hover:bg-lime-500 hover:text-black duration-300">
                      -
                    </button>

                    <span className="text-white text-lg font-semibold">
                      {item.quantity || 1}
                    </span>

                    <button 
                    onClick={() => {
                            increment(item.id)
                               }}
                    className="w-9 h-9 rounded-lg bg-zinc-800 hover:bg-lime-500 hover:text-black duration-300">
                      +
                    </button>

                  </div>

                  <button
                  onClick={() => {
                    deleteItem(item.id)
                  }}
                  className="text-red-500 hover:scale-110 duration-300">
                    🗑
                  </button>

                </div>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* Footer */}
      <div className="border-t border-zinc-800 p-6">

        <div className="flex justify-between text-xl font-bold text-white mb-5">
          <span>Total</span>

          <span className="text-lime-400">
            ${total.toFixed(2)}
          </span>
        </div>

        <button className="w-full bg-lime-400 hover:bg-lime-500 text-black font-bold py-4 rounded-xl duration-300 hover:scale-[1.02]">
          Checkout →
        </button>

      </div>

    </div>
  )
}

export default Cart
