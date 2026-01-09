import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center py-20">
          <div className="glass-strong p-12 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Capture Life's
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Beautiful Moments
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Professional photography services with a modern touch. 
              From weddings to portraits, we create stunning memories that last forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="booking-btn text-lg px-8 py-4">
                📸 Book Your Session Now
              </Link>
              <Link href="/portfolio" className="booking-btn-secondary booking-btn text-lg px-8 py-4">
                View Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-white/80 text-lg">Professional photography for every occasion</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Wedding Photography', emoji: '💒', desc: 'Capturing your special day with elegance' },
              { title: 'Portrait Sessions', emoji: '👤', desc: 'Professional portraits that tell your story' },
              { title: 'Event Photography', emoji: '🎉', desc: 'Memorable moments from your events' }
            ].map((service, index) => (
              <div key={index} className="glass p-8 text-center">
                <div className="text-4xl mb-4">{service.emoji}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-white/80 mb-6">{service.desc}</p>
                <Link href="/booking" className="booking-btn">
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="glass-strong p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your photography needs and create beautiful memories together.
            </p>
            <Link href="/booking" className="booking-btn text-lg px-8 py-4">
              📅 Schedule Your Session
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}