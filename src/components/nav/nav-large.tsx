'use client'

import GoogleLogo from '@/assets/google-logo.svg'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/resources', label: 'Resources' },
]

export const NavLarge = () => {
  return (
    <nav className="hidden w-full items-center justify-between border-b border-gray-200 bg-white px-6 py-4 md:flex">
      <GoogleLogo />
      {/* Navigation Links */}
      <div className="flex items-center space-x-8">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              'text-gray-700 transition-colors duration-200 hover:text-gray-900',
              'text-sm font-medium',
              'relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0',
              'after:bg-blue-500 after:transition-all after:duration-200',
              'hover:after:w-full'
            )}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex items-center">
        <Button
          className={cn(
            'bg-pink-500 text-white hover:bg-pink-600',
            'rounded-md px-6 py-2 font-medium',
            'transition-all duration-200',
            'shadow-sm hover:shadow-md'
          )}
        >
          Schedule A Meeting →
        </Button>
      </div>
    </nav>
  )
}
