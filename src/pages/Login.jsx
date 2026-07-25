import { Eye, Mail, Lock } from "lucide-react";
 import { ToastContainer, toast } from 'react-toastify';
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { MyStore } from "../contex/MyContext";

const Login = () => {

  const {LoginUser , setLoginUser  , registerUser} = useContext(MyStore)


  const Navigate = useNavigate();

  const {
       register,
       handleSubmit,
       reset,
       formState: { errors },
     } = useForm();


     console.log(registerUser)
     let formSubmit = (data) => {
    let user = registerUser.find((val) => {
      

      return val.email === data.email && val.password === data.password;
    });
    

    if (!user) {
     
      toast.error("invalid creds or user not found");
      reset();
      return;
    }

    setLoginUser(user);
    localStorage.setItem("loggedinUser", JSON.stringify(user));
    toast.success("User loggedin");
    reset();
    Navigate("/home")
  };

  
  

  return (
    <div className="bg-[#111111] border border-gray-800 rounded-3xl p-6 sm:p-8 lg:p-10 w-full max-w-md shadow-2xl">

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
        Sign in
      </h1>

      <p className="text-gray-400 mb-8">
        Enter your credentials to continue
      </p>

      <div className="space-y-5">

        {/* Email */}
        <div className="flex items-center border border-gray-700 rounded-xl px-4 h-14">
          <Mail className="text-gray-500" size={20} />

          <input
          {...register('email' , 
                  {required : 'email is requiresd'} ) }
            type="email"
            placeholder="Email address"
            className="bg-transparent outline-none w-full ml-3 placeholder-gray-500"
          />
        </div>
        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

        {/* Password */}
        <div className="flex items-center border border-gray-700 rounded-xl px-4 h-14">
          <Lock className="text-gray-500" size={20} />

          <input
           {...register('password' , 
                  {required : 'password is required' ,
                    minLength: {
    value: 6,
    message: "minimum 6 digit required",
  },

  
                  } ) }
            type="password"
            placeholder="Password"
            className="bg-transparent outline-none w-full ml-3 placeholder-gray-500"
          />

          <Eye className="text-gray-500 cursor-pointer" size={20} />
        </div>
        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}


        <button
        onClick={handleSubmit(formSubmit)}
        className="w-full bg-lime-400 hover:bg-lime-300 transition rounded-xl h-14 text-black font-bold text-lg sm:text-xl">
          Sign in →
        </button>

      </div>

      <p className="text-center text-gray-400 mt-8 text-sm sm:text-base">
        Don't have an account?{" "}
        <span
        onClick={() => {Navigate("/register")}}
        className="text-lime-400 font-semibold cursor-pointer">
          Create one
        </span>
      </p>
    </div>
  );
};

export default Login;