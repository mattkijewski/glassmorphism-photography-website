import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Portfolio } from '@/components/sections/Portfolio'
import { Services } from '@/components/sections/Services'
import { Contact } from '@/components/sections/Contact'
import { Navigation } from '@/components/ui/Navigation'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </main>
  )
}