import NavItem from '@/components/NavItem'
import Navigation from '@/components/Navigation'
import React from 'react'

export default function Progress() {
  return (
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
  )
}
