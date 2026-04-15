'use client'

import GoogleLogo from '@/assets/google-logo.svg'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/resources', label: 'Resources' },
]

export const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex w-full items-center justify-between border-b border-gray-200 bg-white px-4 py-3 md:hidden">
      {/* Logo */}
      <GoogleLogo />

      {/* Mobile Menu */}
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon" className="p-2">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DrawerTrigger>

        <DrawerContent className="h-[80vh]">
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center justify-between border-b p-4">
              <div className="text-lg font-bold">
                <span className="text-blue-500">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-500">o</span>
                <span className="text-blue-500">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
              </div>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-6 w-6" />
                </Button>
              </DrawerClose>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 px-4 py-6">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'block px-4 py-3 text-lg font-medium text-gray-700',
                      'rounded-md hover:bg-gray-50 hover:text-gray-900',
                      'transition-all duration-200'
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="border-t p-4">
              <Button
                className={cn(
                  'w-full bg-pink-500 text-white hover:bg-pink-600',
                  'rounded-md py-3 text-base font-medium',
                  'transition-all duration-200'
                )}
                onClick={() => setIsOpen(false)}
              >
                Schedule A Meeting →
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </nav>
  )
}
