import image1 from '@/assets/images/easy-1.png'
import image2 from '@/assets/images/easy-2.png'
import image3 from '@/assets/images/easy-3.png'
import Image from 'next/image'

const steps = [
  {
    id: '01',
    image: image1,
    alt: 'Add requirements illustration',
    title: 'Add requirements',
    subtitle: '& sign up today',
  },
  {
    id: '02',
    image: image2,
    alt: 'Connect with your onboarding team illustration',
    title: 'Connect with your CSM &',
    subtitle: 'onboarding team',
  },
  {
    id: '03',
    image: image3,
    alt: 'Meet your assistant illustration',
    title: 'Meet your STR',
    subtitle: 'Assistant next week',
  },
]

export const GettingStarted = () => {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-400">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">
            Getting Started is <span className="text-primary">Easy</span>
          </h2>
          <p className="section-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-7">
          {steps.map((step) => (
            <article key={step.id} className="text-center">
              <div className="relative rounded-2xl border border-pink-100 bg-white px-6 pt-12 pb-10">
                <div className="border-primary absolute -top-5 left-5 flex h-14 w-14 items-center justify-center rounded-full border-4 bg-white text-2xl font-medium text-gray-950 shadow-[0_8px_20px_rgba(244,114,182,0.12)]">
                  {step.id}
                </div>

                <div className="flex min-h-32 items-center justify-center">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    className="h-auto w-auto object-contain"
                    priority={false}
                  />
                </div>
              </div>

              <h3 className="mt-7 text-2xl font-semibold tracking-tight text-gray-950">
                {step.title}
              </h3>
              <p className="mt-1 text-2xl font-semibold tracking-tight text-gray-950">
                {step.subtitle}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
