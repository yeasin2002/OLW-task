import { DM_Sans, Manrope, Poppins } from 'next/font/google'

export const DM_Sans_font = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

export const Manrope_font = Manrope({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-manrope',
})

export const Poppins_font = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})
