import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

// Import company logos as components (SVGR)
import company1 from '@/assets/companies/company-1.png'
import company2 from '@/assets/companies/company-2.png'
import company3 from '@/assets/companies/company-3.png'
import company4 from '@/assets/companies/company-4.png'

export const Hero = () => {
  return (
    <div className="relative min-h-screen w-full">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 20% 20%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 80% 80%, rgba(59,130,246,0.3), transparent)
      `,
          backgroundSize: '48px 48px, 48px 48px, 100% 100%, 100% 100%',
        }}
      />

      {/* Floating Company Logos */}
      <div className="absolute inset-0">
        {/* Airbnb Logo - Top Left */}
        <div className="absolute top-20 left-20">
          <div className="flex rotate-12 transform items-center justify-center rounded-xl">
            <Image src={company1} alt="AirbnbLogo" className="h-16 w-16 text-white" />
          </div>
        </div>

        {/* Booking.com Logo - Top Right */}
        <div className="absolute top-16 right-20">
          <div className="flex rotate-12 transform items-center justify-center rounded-xl">
            <Image src={company2} alt="" className="h-16 w-16 text-white" />
          </div>
        </div>

        {/* V Logo - Bottom Left */}
        <div className="absolute bottom-32 left-16">
          <div className="flex rotate-6 transform items-center justify-center rounded-xl">
            <Image src={company3} alt="" className="h-16 w-16 text-white" />
          </div>
        </div>

        {/* Eye Logo - Bottom Right */}
        <div className="absolute right-16 bottom-24">
          <div className="flex rotate-6 transform items-center justify-center rounded-xl">
            <Image src={company4} alt="" className="h-16 w-16 text-white" />
          </div>
        </div>

        {/* Decorative Dots */}
        <div className="absolute top-32 left-1/4 h-3 w-3 rounded-full bg-blue-500"></div>
        <div className="absolute top-1/3 right-1/4 h-2 w-2 rounded-full bg-green-400"></div>
        <div className="absolute bottom-1/3 left-1/3 h-4 w-4 rounded-full bg-red-400"></div>
        <div className="absolute right-1/3 bottom-40 h-2 w-2 rounded-full bg-yellow-400"></div>
        <div className="absolute top-1/2 left-12 h-3 w-3 rounded-full bg-purple-400"></div>
        <div className="absolute top-2/3 right-12 h-2 w-2 rounded-full bg-pink-400"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Heading */}
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Airbnb Assistants For
            <br />
            <span className="text-gray-700">Property Management</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          {/* CTA Buttons */}
          <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="rounded-md bg-pink-500 px-8 py-3 text-base font-medium text-white shadow-lg hover:bg-pink-600"
            >
              Schedule A Meeting →
            </Button>
            <button className="text-base font-medium text-gray-700 underline hover:text-gray-900">
              See Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
