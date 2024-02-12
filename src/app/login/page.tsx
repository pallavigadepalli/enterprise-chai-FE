import Image from 'next/image'
import React from 'react'

export default function Login() {
  return (
    <div className='bg-primaryBGA rounded-lg h-dvh'>
      
      <div className='w-8/12 flex-col p-10'>
        <h2>Logo</h2>
        <h2>Welcome back!</h2>
        <p>Enter your credentials to access your account</p>
        <div>
          <label className="block">
            <span className="text-gray-700">email</span>
              <input
                type="text"
                className="form-input mt-1 block w-full"
                required
                name={'email'}
                placeholder="enter your email"
              />
          </label>
        </div>
        <div>
          <label className="block">
            <span className="text-gray-700">Password</span>
              <input
                type="text"
                className="form-input mt-1 block w-full"
                required
                name={'name'}
                placeholder="enter your password"
              />
          </label>
          <div  className='self-end justify-end'>
            <small>Forgot password</small>
          </div>
        </div>
        <div className="flex gap-2">
          <input type="checkbox"/> Remember me
        </div>
        <button type="submit" className="btn-primary w-full">
          Login
        </button>
        <div className='flex justify-between'>
          <button>Sign in with Google</button>
          <button>Sign in with Linkedin</button>
        </div>
        <div className='flex justify-center'>
          <p>Don’t have an account?  Sign Up</p>
        </div>
      </div>

      <div className="w-3/12">
        
      </div>
    </div>
  )
}
