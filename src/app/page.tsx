import { Nav } from '@/components/nav'

import { TrustedCompanies } from '../components/Trusted-companies'
import { Hero } from '../components/hero'
import { Pricing } from '../components/pricing'
import { Services } from '../components/services'

export default async function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustedCompanies />
      <Services />
      <Pricing />
    </>
  )
}
