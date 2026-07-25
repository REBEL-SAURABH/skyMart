import React, { useContext, useEffect } from 'react'
import { MyStore } from '../contex/MyContext'
import { ShoppingCart, Star } from 'lucide-react'
import { useNavigate } from 'react-router'

const ProductCard = ({product}) => {

  const {cartItems , setCartItems} = useContext(MyStore);

const Navigate = useNavigate();

const CartAdd = (elem) => {
            setCartItems((prev) => [...prev , {...product , quantity : 1}]),
            
           
            Navigate('/cart')
}

useEffect(() => {
  localStorage.setItem("cart items", JSON.stringify(cartItems));
}, [cartItems]);



  return (
   <div className="bg-[#111111] border border-zinc-800 rounded-3xl overflow-hidden hover:border-lime-400 transition-all duration-300 hover:-translate-y-2">

      {/* Product Image */}

      <div 
      onClick={() => {Navigate(`/detail/${product.id}`)}}
      className="bg-white h-64 flex items-center justify-center p-6">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* Product Details */}

      <div className="p-6">

        {/* Category */}

        <span className="inline-block px-3 py-1 rounded-full bg-lime-400/10 text-lime-400 text-sm capitalize">
          {product.category}
        </span>

        {/* Title */}

        <h2 className="text-xl font-bold text-white mt-4 line-clamp-2">
          {product.title}
        </h2>

        {/* Brand */}

        <p className="text-gray-400 mt-1">
          {product.brand}
        </p>

        {/* Description */}

        <p className="text-gray-500 text-sm mt-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}

        <div className="flex items-center gap-2 mt-5">

          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="text-white font-medium">
            {product.rating}
          </span>

          <span className="text-gray-500">
            ({product.reviews.length} Reviews)
          </span>

        </div>

        {/* Price */}

        <div className="flex items-center justify-between mt-6">

          <div>

            <h2 className="text-3xl font-bold text-lime-400">
              ${product.price}
            </h2>

            <p className="text-red-400 text-sm">
              {product.discountPercentage}% OFF
            </p>

          </div>

          <button
          onClick={CartAdd}
          className="w-12 h-12 rounded-xl bg-lime-400 hover:bg-lime-300 flex items-center justify-center transition">

            <ShoppingCart
              className="text-black"
              size={22}
            />

          </button>

        </div>

        {/* Stock */}

        <div className="mt-6 flex items-center justify-between text-sm">

          <span
            className={`font-medium ${
              product.stock > 0
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {product.availabilityStatus}
          </span>

          <span className="text-gray-500">
            Stock : {product.stock}
          </span>

        </div>

      </div>

    </div>
  )
}

export default ProductCard
