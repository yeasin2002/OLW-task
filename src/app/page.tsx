import { Nav } from '@/components/nav'

import { Hero } from '../components/hero'
import { Services } from '../components/services'

export default async function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
    </>
  )
}
