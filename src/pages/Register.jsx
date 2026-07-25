import { ArrowRight, Bolt, Eye, Mail, User } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { useFormAction, useNavigate } from 'react-router'
import { MyStore } from '../contex/MyContext'
import { useForm } from 'react-hook-form'

const Register = () => {

  let {registerUser , setRegisterUser, setLoginUser} = useContext(MyStore);
 
  const Navigate = useNavigate();
 const {
     register,
     handleSubmit,
     reset,
     formState: { errors },
   } = useForm();


   const formSubmit = (data) => {

  
  if (data.password !== data.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

 

  const arr = [...registerUser, data];

  setRegisterUser(arr);
  setLoginUser(data);

  localStorage.setItem("registeredUsers", JSON.stringify(arr));
  localStorage.setItem("loggedinUser", JSON.stringify(data));

  alert("User Registered Successfully");

  reset();
 Navigate("/home");
};

  return (
    
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      

      <div className="w-full max-w-md">
        

        {/* Logo */}

        <div className="flex items-center justify-center gap-3 mb-10">

          <div className="bg-lime-400 w-11 h-11 rounded-xl flex items-center justify-center">
            <Bolt size={22} className="text-black fill-black" />
          </div>

          <h1 className="text-4xl font-bold text-white">
            Sky<span className="text-lime-400">Mart</span>
          </h1>

        </div>

        {/* Card */}

        <div className="bg-[#111111] border border-[#2b2b2b] rounded-[28px] p-8 shadow-2xl">

          <h1 className="text-4xl font-bold text-white">
            Create account
          </h1>

          <p className="text-gray-500 mt-2 mb-8">
            Join SkyMart and start shopping
          </p>

          <div className="space-y-5">

            {/* Name */}

            <div className="flex items-center h-14 rounded-2xl border border-[#3b3b3b] bg-[#1b1b1b] px-4">

              <User size={19} className="text-gray-500" />

              <input
                {...register('name' , 
                  {required : 'name is requiresd'} ) }
                type="text"
                placeholder="Full name"
                className="bg-transparent ml-3 w-full outline-none text-white placeholder:text-gray-500"
              />
              {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

            </div>

            {/* Email */}

            <div className="flex items-center h-14 rounded-2xl border border-[#3b3b3b] bg-[#1b1b1b] px-4">

              <Mail size={19} className="text-gray-500" />

              <input
              {...register('email' , 
                  {required : 'email is required'} ) }
                type='email'
                placeholder="Email address"
                className="bg-transparent ml-3 w-full outline-none text-white placeholder:text-gray-500"
               
              />
              {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

            </div>

            {/* Password */}

            <div className="flex items-center h-14 rounded-2xl border border-[#3b3b3b] bg-[#1b1b1b] px-4">

          

              <input
              {...register('password' , 
                  {required : 'password is required' ,
                    minLength: {
    value: 6,
    message: "minimum 6 digit required",
  },

  
                  } ) }
                type="password"
                placeholder="Password (min 6 chars)"
                className="bg-transparent ml-3 w-full outline-none text-white placeholder:text-gray-500"
              />


              <Eye
                size={19}
                className="text-gray-500 cursor-pointer"
              />
              {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

            </div>

            {/* Confirm Password */}

            <div className="flex items-center h-14 rounded-2xl border border-[#3b3b3b] bg-[#1b1b1b] px-4">

              

              <input
              {...register('confirmPassword' , 
                  {required : 'confirmPassword is required'} ) }
                type="password"
                placeholder="Confirm password"
                className="bg-transparent ml-3 w-full outline-none text-white placeholder:text-gray-500"
              />
              {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword.message}</p>}

            </div>

            {/* Button */}

            <button 
            onClick={handleSubmit(formSubmit)}
            className="w-full h-14 bg-lime-400 hover:bg-lime-300 transition rounded-2xl text-black font-bold text-xl flex items-center justify-center gap-3">

              Create Account

              <ArrowRight size={22} />

            </button>


          </div>

          {/* Footer */}

          <p className="text-center text-gray-500 mt-8">

            Already have an account?{" "}

            <span
            onClick={() => {Navigate("/")}}
            className="text-lime-400 font-semibold cursor-pointer hover:underline">
              Sign in
            </span>

          </p>

        </div>

      </div>

    </div>
  )
}

export default Register
