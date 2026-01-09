'use client'

import { BookingForm } from './BookingForm'

export function BookingSection() {
  return (
    <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-shadow">
            Book Your Session
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to capture your moments? Book a consultation or photography session without any sign-up required.
          </p>
        </div>

        <div className="glass rounded-3xl p-8 sm:p-12">
          <BookingForm />
        </div>
      </div>
    </section>
  )
}