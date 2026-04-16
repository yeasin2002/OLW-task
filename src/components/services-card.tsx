import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import React from 'react'

interface ServicesCardProps {
  image: StaticImageData
  imageAlt: string
  title: string
  description: string
}

export const ServicesCard = ({ image, imageAlt, title, description }: ServicesCardProps) => {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div className="mb-6">
        <Image
          src={image}
          alt={imageAlt}
          className="h-16 w-16 object-contain"
        />
      </div>
      <h3 className="mb-4 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mb-6 text-sm leading-relaxed text-gray-600">{description}</p>
      <button className="text-primary rounded-full border border-pink-500 px-6 py-2 text-sm font-medium transition-colors duration-200 hover:bg-pink-50">
        Read More
      </button>
    </div>
  )
}
