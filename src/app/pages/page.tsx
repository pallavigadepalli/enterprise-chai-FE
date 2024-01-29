

import Banner from '@/components/Banner'
import Layout from '@/components/Layout'
import NavItem from '@/components/NavItem'
import Navigation from '@/components/Navigation'
import SharingBanner from '@/components/SharingBanner'
import Card from '@/components/Card'
import Tags from '@/components/Tags'

import React from 'react'

export default function Progress() {
  return (
    <div>
      <SharingBanner />
      <div>
        <Banner />
      </div>
      <div className="container mx-auto flex justify-between ">
        <div>
          <h2>Onboarding with Ms. Wilson</h2>
        </div>
        <Navigation>
          <NavItem href="/new" isActive>
            Settings
          </NavItem>
          <NavItem href="/new" isActive>
            Auto Scroll
          </NavItem>
          <NavItem href="/new" isActive>
            Pause
          </NavItem>
          <NavItem href="/new" isActive>
            Complete
          </NavItem>
        </Navigation>
      </div>
      <div className='container mx-auto flex justify-between'>
        
          <Layout/>

        <div className=' flex flex-col w-1/3'>
          <div>
          <Card />
          </div>
          <div>
          <Card />
          </div>
        </div>  
      </div>
      
    </div>
  )
}
