'use client'

import React, { useState } from 'react'
import { PricingCard } from './pricing-card'

// Pricing data array
const pricingPlans = [
  {
    id: 'freebie',
    title: 'Freebie',
    description: 'Ideal for individuals who need quick access to basic features.',
    monthlyPrice: '$0',
    yearlyPrice: '$0',
    features: [
      { name: '20,000+ of PNG & SVG graphics', included: true },
      { name: 'Access to 100 million stock images', included: true },
      { name: 'Upload custom icons and fonts', included: false },
      { name: 'Unlimited Sharing', included: false },
      { name: 'Upload graphics & video in up to 4k', included: false },
      { name: 'Unlimited Projects', included: false },
      { name: 'Instant Access to our design system', included: false },
      { name: 'Create teams to collaborate on designs', included: false },
    ],
  },
  {
    id: 'professional',
    title: 'Professional',
    description: 'Ideal for individuals who who need advanced features and tools for client work.',
    monthlyPrice: '$25',
    yearlyPrice: '$19',
    isPopular: true,
    features: [
      { name: '20,000+ of PNG & SVG graphics', included: true },
      { name: 'Access to 100 million stock images', included: true },
      { name: 'Upload custom icons and fonts', included: true },
      { name: 'Unlimited Sharing', included: true },
      { name: 'Upload graphics & video in up to 4k', included: true },
      { name: 'Unlimited Projects', included: true },
      { name: 'Instant Access to our design system', included: true },
      { name: 'Create teams to collaborate on designs', included: false },
    ],
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    description:
      'Ideal for businesses who need personalized services and security for large teams.',
    monthlyPrice: '$100',
    yearlyPrice: '$75',
    features: [
      { name: '20,000+ of PNG & SVG graphics', included: true },
      { name: 'Access to 100 million stock images', included: true },
      { name: 'Upload custom icons and fonts', included: true },
      { name: 'Unlimited Sharing', included: true },
      { name: 'Upload graphics & video in up to 4k', included: true },
      { name: 'Unlimited Projects', included: true },
      { name: 'Instant Access to our design system', included: true },
      { name: 'Create teams to collaborate on designs', included: true },
    ],
  },
]

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Airbnb Assistant <span className="text-primary">pricing</span>
            </h2>
            <p className="mb-8 text-gray-600">Choose a plan that's right for you</p>

            {/* Billing Toggle */}
            <div className="mb-4 flex items-center justify-center gap-4">
              <span
                className={`text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}
              >
                Pay Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isYearly ? 'bg-primary' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isYearly ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span
                className={`text-sm font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}
              >
                Pay Yearly
              </span>
            </div>

            {/* Save 25% Badge */}
            {isYearly && (
              <div className="flex items-center justify-center">
                <div className="relative">
                  <span className="text-primary text-sm font-medium">Save 25%</span>
                  <svg
                    className="text-primary absolute -top-2 -right-8 h-8 w-12"
                    viewBox="0 0 48 32"
                    fill="none"
                  >
                    <path
                      d="M2 15c8-8 20-8 28 0s20 8 28 0"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>

          {/* Pricing Cards Grid */}
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.id}
                title={plan.title}
                description={plan.description}
                price={isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                period="/ Month"
                features={plan.features}
                isPopular={plan.isPopular}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
