import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../Firebase';
import { Link } from 'react-router-dom';

const Login = () => {
    const [successLogin,setSuccessLogin]=useState(false)
    const [errorLogin,setErrorLogin]=useState(false)
    const handleLogin = (e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        console.log(email,password)

        // reset 
        setSuccessLogin(false)
        setErrorLogin('')

        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            (result.user)
            setSuccessLogin(true)
        })
        .catch(error=>
            {
                (error.message)
                setSuccessLogin(false)
                setErrorLogin(error.message)

            })
    }
    return (
    
   <>
     <form onSubmit={handleLogin} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
      {
        successLogin && <p className='text-green-600'>login successful</p>
      }
      {
        errorLogin && <p className='text-red-600'>invalid username or password</p>
      }

      
    </form>
    <p>if do not have an account please <Link to='/register'>Register</Link></p>
   </>

    
  
    );
};

export default Login;