import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <nav className='w-full p-4 flex justify-between items-center'>
      <div className='w-2/4'>
        <h2>Good Morning Dave!</h2>
        <p>“You will succeed if you have delighted customers. Don’t settle for satisfied!”</p>
      </div>
      <div className='w-2/4 flex justify-end items-center gap-4'>
        <div className='relative'>
          <Image
            src={'/search.svg'}
            alt='user photo'
            width={16}
            height={16}
            className='absolute left-3 top-1/2 transform -translate-y-1/2'
          />
        <input type="search" placeholder='Type here...' className='search-input pl-8  pr-4'/>
        </div>
          
        <div className='flex gap-4 gap-y-0'>
          <div className='flex-col justify-end items-end h-16 pt-2'>
            <Image
            src={'/user-01.svg'}
            alt='user photo'
            width={24}
            height={24}
            />
            <small className='text-xsm'>Profile</small>
          </div>
          <div className='flex-col justify-end items-end h-16 pt-2'>
            <Image
            src={'/bell.svg'}
            alt='alert photo'
            width={24}
            height={24}
            />
            <small className='text-xsm text-gray-600'>Alerts</small>
          </div>
        </div>
      </div>
    </nav>
  )
}
