import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { MyStore } from '../contex/MyContext'
import ProductCard from '../pages/ProductCard';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import Cart from './Cart';


const Shop = () => {

let {Product, setProduct , query} = useContext(MyStore);

console.log(query)
 

  const data = async() => {
    try {

      let res = await axios.get('https://dummyjson.com/products');
      let productData = res.data.products;
      setProduct(productData)
      console.log(res.data.products);
      
    } catch (error) {
      console.log("data errors" ,  error)
      
    }
  }



  useEffect(() => {
     data();
  } , [])

  return (
    <div className=''>
     <Navbar />
     <SearchBar />
     <div className='grid grid-cols-4 gap-6 pt-4'>

   {Product
  .filter((elem) => {
    return (
      elem.title.toLowerCase().includes(query.toLowerCase()) 
      ||
      elem.category.toLowerCase().includes(query.toLowerCase())
      
    );
  })
  .map((elem) => (
    <ProductCard key={elem.id} product={elem} />
  ))}
     </div>

    
      
    </div>
  )
}

export default Shop
