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
    <div className={`relative rounded-2xl p-8 ${
      isPopular 
        ? 'bg-pink-500 text-white shadow-xl' 
        : 'bg-white border border-gray-200 shadow-sm'
    }`}>
      {/* Card Header */}
      <div className="mb-8">
        <h3 className={`text-2xl font-bold mb-3 ${
          isPopular ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h3>
        <p className={`text-sm leading-relaxed ${
          isPopular ? 'text-pink-100' : 'text-gray-600'
        }`}>
          {description}
        </p>
      </div>

      {/* Price */}
      <div className="mb-8">
        <div className="flex items-baseline">
          <span className={`text-5xl font-bold ${
            isPopular ? 'text-white' : 'text-gray-900'
          }`}>
            {price}
          </span>
          <span className={`ml-2 text-lg ${
            isPopular ? 'text-pink-100' : 'text-gray-500'
          }`}>
            {period}
          </span>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mb-8">
        <Button
          className={`w-full py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
            isPopular
              ? 'bg-white text-pink-500 hover:bg-gray-50'
              : 'bg-transparent text-pink-500 border border-pink-500 hover:bg-pink-50'
          }`}
          variant={isPopular ? "default" : "outline"}
        >
          {buttonText}
        </Button>
      </div>

      {/* Features List */}
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <div className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
              feature.included
                ? isPopular
                  ? 'bg-white'
                  : 'bg-pink-100'
                : 'bg-gray-100'
            }`}>
              {feature.included ? (
                <Check className={`w-3 h-3 ${
                  isPopular ? 'text-pink-500' : 'text-pink-500'
                }`} />
              ) : (
                <X className="w-3 h-3 text-gray-400" />
              )}
            </div>
            <span className={`text-sm ${
              feature.included
                ? isPopular ? 'text-white' : 'text-gray-900'
                : isPopular ? 'text-pink-200' : 'text-gray-400'
            }`}>
              {feature.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}