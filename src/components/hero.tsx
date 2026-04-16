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
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-x-0 top-0 z-0 h-14 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.18),rgba(255,255,255,0)_72%)] sm:h-20" />
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px)
      `,
          backgroundSize: '48px 48px, 48px 48px',
        }}
      />

      {/* Floating Company Logos */}
      <div className="absolute inset-0">
        {/* Airbnb Logo - Top Left */}
        <div className="absolute top-18 left-[18%] sm:top-20 sm:left-[19%] lg:top-28 lg:left-[19%]">
          <div className="hero-floating-logo rotate-12 transform">
            <Image src={company1} alt="Airbnb logo" className="hero-company-logo" />
          </div>
        </div>

        {/* Booking.com Logo - Top Right */}
        <div className="absolute top-16 right-[18%] sm:top-18 sm:right-[19%] lg:top-24 lg:right-[18%]">
          <div className="hero-floating-logo rotate-12 transform">
            <Image src={company2} alt="Booking logo" className="hero-company-logo" />
          </div>
        </div>

        {/* V Logo - Bottom Left */}
        <div className="absolute bottom-30 left-[21%] sm:bottom-28 sm:left-[21%] lg:bottom-26 lg:left-[22%]">
          <div className="hero-floating-logo rotate-6 transform">
            <Image src={company3} alt="Company logo" className="hero-company-logo" />
          </div>
        </div>

        {/* Eye Logo - Bottom Right */}
        <div className="absolute right-[21%] bottom-24 sm:right-[21%] sm:bottom-22 lg:right-[21%] lg:bottom-20">
          <div className="hero-floating-logo rotate-6 transform">
            <Image src={company4} alt="Tripadvisor logo" className="hero-company-logo" />
          </div>
        </div>

        {/* Decorative Dots */}
        <div className="hero-dot top-32 left-[30%] h-3 w-3 bg-blue-500 sm:top-34 lg:top-32 lg:left-[31%]" />
        <div className="hero-dot top-[22%] right-[31%] h-2.5 w-2.5 bg-emerald-400 lg:right-[32%]" />
        <div className="hero-dot bottom-[34%] left-[40%] h-4 w-4 bg-red-400 lg:bottom-[38%] lg:left-[17%]" />
        <div className="hero-dot bottom-18 left-[7%] h-2 w-2 bg-amber-300 lg:bottom-10" />
        <div className="hero-dot top-[36%] left-[6%] h-3 w-3 bg-violet-500 lg:top-[26%] lg:left-[6.5%]" />
        <div className="hero-dot bottom-18 left-[52%] h-3.5 w-3.5 bg-cyan-400 lg:bottom-10" />
        <div className="hero-dot top-[39%] right-[11%] h-3.5 w-3.5 bg-amber-300 lg:top-[39%] lg:right-[11%]" />
        <div className="hero-dot right-[8%] bottom-28 h-2 w-2 bg-slate-900 lg:right-[8%] lg:bottom-28" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-28 pb-28 sm:pt-30 sm:pb-32 lg:pt-34 lg:pb-36">
        <div className="mx-auto max-w-5xl text-center">
          {/* Main Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-[4.25rem] lg:leading-[1.08]">
            Airbnb Assistants For
            <br />
            <span className="text-[2.15rem] font-medium text-black sm:text-[2.65rem] lg:text-[3.8rem]">
              Property Management
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-12 max-w-3xl text-[14px] leading-[1.7] text-gray-700 lg:text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          {/* CTA Buttons */}
          <div className="mb-16 flex flex-col items-center justify-center gap-4">
            <Button className="h-14 rounded-md px-8 py-3 text-base text-[14px] font-medium text-white shadow-lg">
              Schedule A Meeting →
            </Button>
            <button className="text-base text-[14px] font-medium text-gray-700 underline hover:text-gray-900">
              See Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
