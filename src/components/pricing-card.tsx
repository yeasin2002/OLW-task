import { Button } from '@/components/ui/button'
import { Check, X } from 'lucide-react'
import React from 'react'

interface Feature {
  name: string
  included: boolean
}

interface PricingCardProps {
  title: string
  description: string
  price: string
  period: string
  features: Feature[]
  isPopular?: boolean
  buttonText?: string
}

export const PricingCard = ({
  title,
  description,
  price,
  period,
  features,
  isPopular = false,
  buttonText = "Get Started Now"
}: PricingCardProps) => {
  return (
    <div
      className={`font-manrope relative rounded-2xl p-8 ${
        isPopular ? 'bg-primary text-white shadow-xl' : 'border border-gray-200 bg-white shadow-sm'
      }`}
    >
      {/* Card Header */}
      <div className="mb-8">
        <h3 className={`mb-3 text-2xl font-bold ${isPopular ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        <p className={`text-sm leading-relaxed ${isPopular ? 'text-pink-100' : 'text-gray-600'}`}>
          {description}
        </p>
      </div>

      {/* Price */}
      <div className="mb-8">
        <div className="flex items-baseline">
          <span className={`text-5xl font-semibold ${isPopular ? 'text-white' : 'text-gray-900'}`}>
            {price}
          </span>
          <span className={`ml-2 text-lg ${isPopular ? 'text-pink-100' : 'text-gray-500'}`}>
            {period}
          </span>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mb-8">
        <Button
          className={`w-full rounded-md py-3 text-base font-medium transition-colors duration-200 ${
            isPopular
              ? 'text-primary bg-white hover:bg-gray-50'
              : 'text-primary border-primary hover:bg-primary border bg-transparent hover:text-white'
          }`}
          variant={isPopular ? 'default' : 'outline'}
        >
          {buttonText}
        </Button>
      </div>

      {/* Features List */}
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`mr-3 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                feature.included ? (isPopular ? 'bg-white' : 'bg-[#FAC4D2]') : 'bg-gray-100'
              }`}
            >
              {feature.included ? (
                <Check className={`h-3 w-3 ${isPopular ? 'text-primary' : 'text-primary'}`} />
              ) : (
                <X className="h-3 w-3 text-gray-400" />
              )}
            </div>
            <span
              className={`font-manrope text-sm font-medium ${
                feature.included
                  ? isPopular
                    ? 'text-white'
                    : 'text-gray-900'
                  : isPopular
                    ? 'text-pink-200'
                    : 'text-gray-400'
              }`}
            >
              {feature.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}