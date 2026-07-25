import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Navbar from './Navbar';
import { MyStore } from '../contex/MyContext';

const ProductDetail = () => {

  let {setCartItems} = useContext(MyStore)

  const [product, setproduct] = useState([]);;
  const Navigate = useNavigate();

  const {id} = useParams();

  const CartAdd = (elem) => {
            setCartItems((prev) => [...prev , {...product , quantity : 1}]),
            
           
            Navigate('/cart')
}
  

  const single =async () => {
    try {
      const res =await axios.get(`https://dummyjson.com/products/${id}`)
      setproduct(res.data)
    } catch (error) {
      console.log("single prodect " , error)
      
    }
  }

  useEffect(() =>{
    single()
  } , [])

  return (
     <div className="min-h-screen bg-zinc-950 text-white py-10 px-6">
      <Navbar />
      <div className="max-w-7xl mx-auto">

        {/* Main Card */}
        <div className="grid lg:grid-cols-2 gap-10 bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800">

          {/* Left Side - Image */}
          <div className="bg-zinc-950 flex items-center justify-center p-10">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full max-w-md object-contain hover:scale-105 duration-300"
            />
          </div>

          {/* Right Side */}
          <div className="p-8 flex flex-col justify-between">

            <div>

              {/* Category */}
              <span className="inline-block px-4 py-1 rounded-full bg-violet-600/20 text-violet-400 text-sm mb-4 capitalize">
                {product.category}
              </span>

              {/* Title */}
              <h1 className="text-4xl font-bold mb-4">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-5">
                <div className="text-yellow-400 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>

                <span className="text-zinc-400">
                  {product.rating} Rating
                </span>
              </div>

              {/* Description */}
              <p className="text-zinc-400 leading-8">
                {product.description}
              </p>

              {/* Price */}
              <div className="mt-8">
                <h2 className="text-4xl font-bold text-lime-400">
                  ${product.price}
                </h2>
              </div>

              {/* Stock */}
              <div className="mt-6 flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-green-500"></span>
                <p className="text-green-400">
                  {product.availabilityStatus}
                </p>
              </div>

              {/* Brand */}
              <div className="mt-4">
                <span className="text-zinc-500">Brand : </span>
                <span className="font-medium">{product.brand}</span>
              </div>

              {/* Shipping */}
              <div className="mt-3">
                <span className="text-zinc-500">Shipping : </span>
                <span>{product.shippingInformation}</span>
              </div>

              {/* Warranty */}
              <div className="mt-3">
                <span className="text-zinc-500">Warranty : </span>
                <span>{product.warrantyInformation}</span>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-10">

              <button 
              onClick={CartAdd}
              className="flex-1 bg-lime-500 hover:bg-lime-400 text-black font-semibold py-4 rounded-xl transition">
                Add to Cart
              </button>

              <button 
              onClick={CartAdd}
              className="flex-1 border border-zinc-700 hover:border-lime-500 hover:text-lime-400 py-4 rounded-xl transition">
                Buy Now
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default ProductDetail
