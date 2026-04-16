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

import user1 from '@/assets/users/user-1.png'
import user2 from '@/assets/users/user-2.png'
import user3 from '@/assets/users/user-3.png'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const FAQ = () => {
  return (
    <section className="bg-[#F9FAFB] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-400 rounded-[2rem] px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
        <div className="bg-[#fbfbfd]">
          <div className="text-center">
            <h2 className="section-title">
              Frequently asked <span className="text-primary">questions</span>
            </h2>
            <p className="section-subtitle">
              Everything you need to know about the product and billing.
            </p>
          </div>
          <div className="mx-auto mt-14 max-w-6xl lg:mt-16">
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
                      <span className="text-primary border-primary relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2">
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
        </div>

        <div className="mt-16 border border-t border-transparent bg-[#fbfbfd] pt-16 text-center lg:mt-20 lg:pt-20">
          <div className="flex items-center justify-center">
            <div className="flex items-end -space-x-3 sm:-space-x-4">
              <Avatar className="h-20 w-20 border-4 border-white shadow-sm sm:h-22 sm:w-22">
                <AvatarImage src={user1.src} alt="Team member 1" className="object-cover" />
                <AvatarFallback>AJ</AvatarFallback>
              </Avatar>
              <Avatar className="h-24 w-24 -translate-y-2 border-4 border-white shadow-sm sm:h-28 sm:w-28 sm:-translate-y-3">
                <AvatarImage src={user2.src} alt="Team member 2" className="object-cover" />
                <AvatarFallback>EM</AvatarFallback>
              </Avatar>
              <Avatar className="h-20 w-20 border-4 border-white shadow-sm sm:h-22 sm:w-22">
                <AvatarImage src={user3.src} alt="Team member 3" className="object-cover" />
                <AvatarFallback>LN</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <h3 className="mt-10 text-4xl font-bold text-[#101828] sm:text-[25px]">
            Still have Questions?
          </h3>
          <p className="mx-auto mt-6 max-w-4xl text-2xl leading-relaxed text-[#9C9C9C] sm:text-[18px]">
            Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
          </p>

          <Button className="bg-primary mt-12 px-10 text-2xl text-[16px] font-medium text-white shadow-none hover:bg-pink-600">
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  )
}
