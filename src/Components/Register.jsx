import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import auth from "../Firebase";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [errorMessage,setErrormessage]= useState('')
  const [success,setSucceess]= useState(false)
  const [showPassword,setShowPassword]=useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value;

        setErrormessage('')
        setSucceess(false)

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
        if(!passwordRegex.test(password)){
          setErrormessage('must be one loweracse uppercase one number and special character')
          return;
        }
        if(password.length<6){
          setErrormessage('password should be 6 character or longer')
          return
        }

        
        createUserWithEmailAndPassword (auth, email, password)
    .then(result=>{
        console.log(result.user)
        setSucceess(true)
    })
    .catch(error=>{
        setErrormessage(error.message)
        setSucceess(false)
    })
        

    }
    
  return (
        <form onSubmit={handleSubmit} className="card bg-base-100 my-8 w-[80%] mx-auto max-w-sm shrink-0 shadow-2xl">
          <div className="card-body" >
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input w-full"
                  placeholder="Password"
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 z-10"
                >
                  {
                    showPassword?<FaEyeSlash />:<FaEye />
                  }
                </div>
              </div>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-primary mt-4">Register</button>
            </fieldset>
          </div>
          {
          errorMessage && <p className="text-red-600">{errorMessage}</p>
        }
          {
          success && <p className="text-green-600">sign up is success</p>
        }
        </form>

        
      
  );
};

export default Register;
