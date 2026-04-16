import Image from 'next/image'
import React from 'react'

// Import company logos
import Image1 from '@/assets/trusted-companies/image-1.png'
import Image2 from '@/assets/trusted-companies/image-2.png'
import Image3 from '@/assets/trusted-companies/image-3.png'
import Image4 from '@/assets/trusted-companies/image-4.png'
import Image5 from '@/assets/trusted-companies/image-5.png'
import Image6 from '@/assets/trusted-companies/image-6.png'
import Image7 from '@/assets/trusted-companies/image-7.png'

const companyLogos = [
  { src: Image1, alt: 'Airbnb' },
  { src: Image2, alt: 'Booking.com' },
  { src: Image3, alt: 'Vrbo' },
  { src: Image4, alt: 'Tripadvisor' },
  { src: Image5, alt: 'Agoda' },
  { src: Image6, alt: 'Expedia' },
  { src: Image7, alt: 'HomeToGo' },
]

export const TrustedCompanies = () => {
  return (
    <section className="bg-white py-16">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">
          Trusted by leaders in 50+ industries
        </h2>
      </div>

      {/* Company Logos Grid */}
      <div className="flex flex-wrap items-center justify-center gap-8 bg-[#F6F6F6] py-6 md:gap-12 lg:gap-16">
        {companyLogos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center opacity-70 transition-opacity duration-200 hover:opacity-100"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={80}
              className="h-11 w-auto object-contain filter transition-all duration-200"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
