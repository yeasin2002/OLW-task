import GoogleLogo from '@/assets/google-logo.svg'
import { Facebook, Github, Instagram, Twitter } from 'lucide-react'
import React from 'react'

const footerLinks = [
  {
    title: 'Company',
    items: ['About', 'Features', 'Works', 'Career'],
  },
  {
    title: 'Help',
    items: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'],
  },
  {
    title: 'Resources',
    items: ['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'],
  },
]

const socialLinks = [
  { label: 'Twitter', icon: Twitter },
  { label: 'Facebook', icon: Facebook },
  { label: 'Instagram', icon: Instagram },
  { label: 'GitHub', icon: Github },
]

export const Footer = () => {
  return (
    <footer className="bg-white pt-16 sm:pt-20 lg:pt-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid gap-12 border-t border-transparent pb-16 md:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.3fr_0.7fr_0.7fr_0.7fr] lg:gap-16 lg:pb-20">
          <div className="max-w-md">
            <div className="scale-[1.18] origin-left">
              <GoogleLogo />
            </div>

            <p className="mt-10 text-[1.05rem] leading-10 text-[#6b7280] sm:text-[1.12rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet
              accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper
              amet adipiscing fermentum.
            </p>

            <div className="mt-12 flex items-center gap-8 text-[#2b2b31]">
              {socialLinks.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="transition-colors hover:text-pink-500"
                >
                  <Icon className="h-7 w-7 stroke-[2.1]" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-[2rem] font-semibold tracking-tight text-[#20242f] md:text-[1.9rem]">
                {group.title}
              </h3>
              <ul className="mt-8 space-y-7">
                {group.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[1.05rem] font-medium text-[#20242f] transition-colors hover:text-pink-500 sm:text-[1.12rem]"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#2a0f4b] px-6 py-6 text-center sm:px-10 lg:px-16 lg:py-7">
        <p className="text-base font-medium text-white sm:text-lg">
          © Copyright 2024, All Rights Reserved by XYZ
        </p>
      </div>
    </footer>
  )
}
