import React from 'react'

interface ServicesCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export const ServicesCard = ({ icon, title, description }: ServicesCardProps) => {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div className="mb-6">{icon}</div>
      <h3 className="mb-4 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mb-6 text-sm leading-relaxed text-gray-600">{description}</p>
      <button className="rounded-full border border-pink-500 px-6 py-2 text-sm font-medium text-pink-500 transition-colors duration-200 hover:bg-pink-50">
        Read More
      </button>
    </div>
  )
}
