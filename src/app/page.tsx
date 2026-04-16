import { Nav } from '@/components/nav'

import { ChooseUs } from '@/components/choose-us'
import { Hero } from '@/components/hero'
import { OurTools } from '@/components/our-tools'
import { Pricing } from '@/components/pricing'
import { Services } from '@/components/services'
import { TrustedCompanies } from '@/components/trusted-companies'
import { UserReviews } from '@/components/user-reviews'
import { GettingStarted } from '../components/getting-started'

export default async function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustedCompanies />
      <Services />
      <Pricing />
      <OurTools />
      <GettingStarted />
      <ChooseUs />
      <UserReviews />
    </>
  )
}
