

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
      <div className="w-full  px-10">
        <Banner />
      </div>
      <div className="w-full h-12 px-10 mt-4 mx-auto flex justify-between align-center items-center">
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
      <div className='w-full px-10'>
        <Tags />
      </div>
      <div className=' w-full h-4 px-10 flex gap-10'>
        <Layout/>
        <div className=' flex flex-col w-[320]'>
          <div>
            <Card />
          </div>
        </div>  
      </div>
    </div>
  )
}
