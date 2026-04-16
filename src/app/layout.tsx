import { Toaster } from '@/components/ui/toaster'

import { DM_Sans_font, Manrope_font, Poppins_font } from '@/lib/font'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type React from 'react'

import { cn } from '../lib/utils'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          DM_Sans_font.variable,
          Manrope_font.variable,
          Poppins_font.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: {
    default: 'OLW-task',
    template: '%s | OLW-task',
  },
  description: 'OLW-task ',
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  authors: [{ name: 'Yeasin' }],
  creator: 'Md Kawsar Islam Yeasin',

}
