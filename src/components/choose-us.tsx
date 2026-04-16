import ChooseUsRightSideImage from '@/assets/images/ChooseUs-cover.png'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'
import Image from 'next/image'

const reasons = [
  'Brilliant Client Service',
  'Flexibility & Adaptability',
  'We make it Personal',
  'We have expart in our team',
]

export const ChooseUs = () => {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-pink-100 bg-[#fff1f5] shadow-[0_28px_80px_rgba(244,114,182,0.12)]">
        <div className="grid items-center gap-12 px-6 py-10 sm:px-10 md:px-12 lg:grid-cols-[0.92fr_1.08fr] lg:px-16 lg:py-16">
          <div className="max-w-xl">
            <span className="text-primary inline-flex rounded-full border border-pink-200 bg-white/80 px-4 py-1 text-sm font-medium tracking-[0.18em] uppercase">
              Why choose us
            </span>
            <h2 className="mt-6 max-w-lg text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
              Few Reasons Why you Choose us?
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-gray-700 sm:text-lg">
              Dedicated Airbnb support that feels human, adapts to your workflow, and keeps guests,
              calendars, and operations moving without friction.
            </p>

            <ul className="mt-10 space-y-5">
              {reasons.map((reason) => (
                <li
                  key={reason}
                  className="flex items-center gap-4 text-lg font-semibold text-gray-900"
                >
                  <span className="text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-200/80">
                    <Check className="h-5 w-5" />
                  </span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className="bg-primary mt-10 rounded-xl px-8 text-base font-semibold text-white shadow-[0_18px_36px_rgba(244,114,182,0.32)] hover:bg-pink-600"
            >
              Schedule A Meeting
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="relative lg:min-h-135">
            <div className="absolute inset-x-10 top-10 hidden h-40 rounded-full bg-pink-300/30 blur-3xl lg:block" />
            <div className="bg-primary/18 absolute bottom-6 left-8 hidden h-44 w-44 rounded-full blur-3xl lg:block" />
            <div className="relative mx-auto max-w-170">
              <Image
                src={ChooseUsRightSideImage}
                alt="Property management specialist surrounded by booking and calendar tools"
                priority={false}
                className="h-auto w-full object-contain drop-shadow-[0_28px_48px_rgba(236,72,153,0.18)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
