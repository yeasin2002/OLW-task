import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Minus, Plus } from 'lucide-react'
import React from 'react'
import { faqItems } from '../data/faqItems.data'

export const FAQ = () => {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#fbfbfd] px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-[#182033] sm:text-5xl">
            Frequently asked <span className="text-primary">questions</span>
          </h2>
          <p className="mt-5 text-lg text-[#182033]">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl lg:mt-16">
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="border-b border-pink-200/80 py-3 last:border-b-0"
              >
                <AccordionTrigger
                  className="items-center py-5 text-left text-[1.05rem] font-semibold text-[#111827] hover:no-underline sm:text-[1.15rem]"
                  icon={
                    <span className="text-primary relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-pink-500">
                      <Plus className="h-3.5 w-3.5 transition-opacity duration-200 group-data-[state=open]:opacity-0" />
                      <Minus className="absolute h-3.5 w-3.5 opacity-0 transition-opacity duration-200 group-data-[state=open]:opacity-100" />
                    </span>
                  }
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="max-w-3xl pr-12 text-lg leading-9 text-[#6b7280]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mx-auto mt-16 max-w-5xl border-t border-transparent pt-16 text-center lg:mt-20 lg:pt-20">
          <div className="flex items-center justify-center">
            <div className="flex -space-x-3">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-[linear-gradient(135deg,#8f9f52,#d5dcc1)] text-sm font-semibold text-white shadow-sm">
                AJ
              </div>
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-[linear-gradient(135deg,#d9c5f6,#f5e7e4)] text-base font-semibold text-[#7b4f65] shadow-sm">
                EM
              </div>
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-[linear-gradient(135deg,#3f332f,#f4d5d5)] text-sm font-semibold text-white shadow-sm">
                LN
              </div>
            </div>
          </div>

          <h3 className="mt-10 text-4xl font-semibold tracking-tight text-[#182033] sm:text-5xl">
            Still have Questions?
          </h3>
          <p className="mx-auto mt-6 max-w-4xl text-2xl leading-relaxed text-[#9ca3af] sm:text-[2rem]">
            Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
          </p>

          <Button
            size="lg"
            className="bg-primary mt-12 h-18 rounded-2xl px-10 text-2xl font-medium text-white shadow-none hover:bg-pink-600"
          >
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  )
}
