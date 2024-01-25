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
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h1>Onboarding with Ms. Wilson</h1>
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
      <div className='container mx-auto flex items-center justify-between'>
        <Layout/>
        <Card />
      </div>
    </div>
  
  )
}
