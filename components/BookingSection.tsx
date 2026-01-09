'use client'

import CalendarWidget from './CalendarWidget'

export default function BookingSection() {
  return (
    <section id="booking" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
            Book Your Session
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Select your preferred date and time for a consultation or photography session
          </p>
        </div>
        
        <CalendarWidget />
      </div>
    </section>
  )
}