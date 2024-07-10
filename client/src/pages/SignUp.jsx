import { set } from 'mongoose';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import OAuth from '../components/OAuth';

const SignUp = () => {

  const [error,setError]=useState(null)
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate()

  const [formData,setFormData]=useState({})
  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value,
    });
  }

  // const handleSubmit=async (e)=>{
  //   e.preventDefault();
  //   const res=await fetch('/api/auth/signup',formData,{
  //     method:'POST',
  //     headers:{
  //       'Content-Type':'application/json',
  //     },
  //     body:JSON.stringify(formData),
  //   });
  //   const data=await res.json();  
  //   console.log(data);
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const contentType = res.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await res.json();
        if(data.success===false){
          setError(data.message)
          setLoading(false)
            return;
        }
        setError(null)
        setLoading(false)
        navigate('/sign-in')
        console.log(data);
      } else {
        const text = await res.text();
        console.error(`Unexpected response content-type: ${contentType}, response: ${text}`);
      }
    } catch (error) {
      setLoading(false)
      console.error('Fetch error:', error);
    }
  };

  
  console.log(formData)
  return (


    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img src="https://source.unsplash.com/random" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div className="w-full h-100">

          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Create your account</h1>

          <form className="mt-6" onSubmit={handleSubmit} >
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="name"
                name="username"
                id="username"
                placeholder="Enter Full Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                onChange={handleChange} 
                autoFocus
                autoComplete="email"
                required
                // onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autoFocus
                autoComplete="email"
                required
                onChange={handleChange}
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                minLength="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
                onChange={handleChange}
              />
            </div>

            <div className="text-right mt-2">
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
            </div>

            <button
            disabled={loading}
              type="submit"
              className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
            >
              {loading ?  'loading' : 'Sign Up'}

            </button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />

         <OAuth/>

          <p className="mt-8">
            Have an account? <a href="/sign-in" className="text-blue-500 hover:text-blue-700 font-semibold">Login your account</a>
          </p>
        </div>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </section>
 
  )
}

export default SignUp