import { Nav } from '@/components/nav'

import { Hero } from '../components/hero'
import { Services } from '../components/services'
import { TrustedCompanies } from '../components/Trusted-companies'

export default async function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustedCompanies />
      <Services />
    </>
  )
}
