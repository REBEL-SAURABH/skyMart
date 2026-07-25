import { createContext, useState } from "react";
import ProductCard from "../pages/ProductCard";

export const MyStore =  createContext();


export const ContextProvider = ({children}) => {

   const [Product, setProduct] = useState([]);
   
   const [query, setQuery] = useState('');
   const [cartItems, setCartItems] = useState(() => {
  return JSON.parse(localStorage.getItem("cart items")) || []
   });
   const [LoginUser, setLoginUser] = useState(() => {
  return JSON.parse(localStorage.getItem("loggedinUser")) || null
});
   const [registerUser, setRegisterUser] = useState(() => {
  return JSON.parse(localStorage.getItem("registeredUsers")) || []
   });



   const deleteItem = (id) => {
   setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

   const increment = (id) => {
  console.log(id)
    setCartItems((prev) => {
     return prev.map((val) => {
       return val.id === id ? {...val , quantity : val.quantity + 1 } : val
     })
    })
}



 const decrement = (id) => {
  setCartItems((prev) => {
    return prev
      .map((val) =>
        val.id === id
          ? { ...val, quantity: val.quantity - 1 }
          : val
      )
      .filter((val) => val.quantity > 0);
  });
};

   
  

   
   
  

  return (<MyStore.Provider value={{Product , setProduct ,  LoginUser , setLoginUser ,registerUser , setRegisterUser , query , setQuery , cartItems , setCartItems , increment  , decrement , deleteItem}}>{children} </MyStore.Provider>)
}
