'use client'

// import { useScan } from 'react-scan'

import { ThemeProvider } from '@/components/theme-provider'
import { NextIntlClientProvider } from 'next-intl'
import React from 'react'
export const RootWrapper = ({ children }: { children: React.ReactNode }) => {
  // uncomment if you  want to use react-scan, this can be annoying sometimes - so by default it's disabled
  //   useScan({ enabled: process.env.NODE_ENV === 'development' })
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </>
  )
}
