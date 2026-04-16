import React from 'react'
import { servicesData } from '../data/services.data'
import { ServicesCard } from './services-card'

export const Services = () => {
  return (
    <section className="py-20">
      <div className="px-4">
        <div className="mx-auto max-w-400">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Our <span className="text-primary">Service</span>
            </h2>
            <p className="mx-auto max-w-3xl leading-relaxed text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <ServicesCard
                key={service.id}
                image={service.image}
                imageAlt={service.imageAlt}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
