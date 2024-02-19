'use client'
import Image from 'next/image'
import React from 'react'
import {useForm} from "react-hook-form";
import {useRouter} from "next/navigation";


export default function Login() {
    const {register , handleSubmit} = useForm()
    const router = useRouter()
    const fetchLogin = async (formData) => {
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_BACKEND + '/login', {
                method: 'POST',
                body: JSON.stringify(
                    {
                        email: formData.email,
                        password: formData.password
                    }
                ),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            if (response.ok) {
                const json = await response.json()
                localStorage.setItem('token', json.token)
                router.push('/home/dashboard')
            }
        } catch (e) {
            console.log(e)
        }
    }
  return (
    <form className='bg-white rounded-lg h-screen flex xl:pl-36 lg:pl-24' onSubmit={handleSubmit(fetchLogin)}>

      <div className='w-7/12 flex-col p-10'>
        <div className='w-9/12'>
          <a className="flex brand-name text-2xl text-white place-items-center" href={'/'}>
            <span>Enterprise</span>
            <Image src="/cup_logo.svg" alt="Logo" width={43} height={45} className={'mx-1 mb-3'}/>
            <span className={'font-medium'}>CH</span>
            <span className={'font-medium'}>AI</span>
          </a>
          <p className='welcome-back'>Welcome back!</p>
          <h3 className='mb-10'>Enter your credentials to access your account</h3>
          <div>
            <label className="block">
              <span className="text-gray-700">email</span>
                <input
                  type="text"
                  className="form-input mt-1 block w-full"
                  {...register('email')}
                  placeholder="enter your email"
                />
            </label>
          </div>
        <br />
        <div>
          <label className="block">
            <span className="text-gray-700">password</span>
              <input
                type="text"
                className="form-input mt-1 block w-full"
                {...register('password')}
                placeholder="enter your password"
              />
          </label>
          <div  className='flex justify-end mt-1'>
            <small className='mr-0 text-primarySmall'>forgot password</small>
          </div>
        </div>
        <div className="flex gap-2 pt-4 pb-4 mb-8">
          <input type="checkbox" className='checkbox-login'/> Remember me
        </div>
          <button type="submit" className="btn-primary w-full">
            Log in
          </button>
        <div className='w-full flex justify-between  items-center mt-20'>
          <button className='btn-login'>
            <Image src={'/google.png'} alt='linkedin logo' width={30} height={30}/>
            Sign in with Google
          </button>
          <button className='btn-login'>
          <Image src={'/linkedin.png'} alt='linkedin logo' width={30} height={30}/>
            Sign in with Linkedin
            </button>
        </div>
        <div className='flex justify-center gap-2 mt-10'>
          <p>Don’t have an account?  </p>
          <p className='text-primarySmall '>Sign Up</p>
        </div>
        </div>
      </div>

      <div className="w-5/12 h-full relative">
        <div className="absolute inset-0">
        <Image src={'/Frame Image.png'} alt='bubbles photo' layout='fill' objectFit='cover' />
        </div>
      </div>
    </form>
  )
}
