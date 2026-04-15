import React from 'react'
import { NavLarge } from './nav-large'
import { NavMobile } from './nav-mobile'

export const Nav = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <NavLarge />
      <NavMobile />
    </header>
  )
}
