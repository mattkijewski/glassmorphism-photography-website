import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Portfolio } from '@/components/Portfolio'
import { BookingSection } from '@/components/BookingSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <Hero />
      <Services />
      <Portfolio />
      <BookingSection />
      <Footer />
    </main>
  )
}