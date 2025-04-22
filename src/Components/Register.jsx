import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import auth from "../Firebase";

const Register = () => {
  const [errorMessage,setErrormessage]= useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        createUserWithEmailAndPassword (auth, email, password)
    .then(result=>{
        console.log(result.user)
    })
    .catch(error=>{
        setErrormessage(error.message)
    })
        

    }
    
  return (
        <form onSubmit={handleSubmit} className="card bg-base-100 my-8 w-[80%] mx-auto max-w-sm shrink-0 shadow-2xl">
          <div className="card-body" >
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-primary mt-4">Register</button>
            </fieldset>
          </div>
          {
          errorMessage && <p className="text-red-600">{errorMessage}</p>
        }
        </form>

        
      
  );
};

export default Register;
