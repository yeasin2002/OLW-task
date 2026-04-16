import Image from 'next/image'
import React from 'react'

// Import tool logos
import Tool1 from '@/assets/tools/tools-1.png'
import Tool2 from '@/assets/tools/tools-2.png'
import Tool3 from '@/assets/tools/tools-3.png'
import Tool4 from '@/assets/tools/tools-4.png'
import Tool5 from '@/assets/tools/tools-5.png'
import Tool6 from '@/assets/tools/tools-6.png'
import Tool7 from '@/assets/tools/tools-7.png'
import Tool8 from '@/assets/tools/tools-8.png'
import Tool9 from '@/assets/tools/tools-9.png'

const toolLogos = [
  { src: Tool1, alt: 'PriceLabs' },
  { src: Tool2, alt: 'Wheelhouse' },
  { src: Tool3, alt: 'Beyond Pricing' },
  { src: Tool4, alt: 'Hostfully' },
  { src: Tool5, alt: 'Guesty' },
  { src: Tool6, alt: 'Lodgify' },
  { src: Tool7, alt: 'Hostfully' },
  { src: Tool8, alt: 'Guesty' },
  { src: Tool9, alt: 'Lodgify' },
]

export const OurTools = () => {
  return (
    <section className="py-20">
      <div className="mb-16 text-center">
        <h2 className="mb-6 text-4xl font-bold text-black">
          Our <span className="text-pink-500">Tools</span>
        </h2>
        <p className="mx-auto max-w-3xl leading-relaxed text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="bg-[#F6F6F6]">
        <div className="container mx-auto grid grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:grid-cols-3">
          {toolLogos.map((tool, index) => (
            <div
              key={index}
              className="flex min-h-[160px] items-center justify-center rounded-2xl bg-white p-8 transition-shadow duration-200"
            >
              <Image
                src={tool.src}
                alt={tool.alt}
                width={200}
                height={80}
                className="h-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
