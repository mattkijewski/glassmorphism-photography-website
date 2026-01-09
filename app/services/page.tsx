import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      title: 'Wedding Photography',
      emoji: '💒',
      price: 'Starting at $2,500',
      features: [
        'Full day coverage',
        'Professional editing',
        'Online gallery',
        'Print release'
      ]
    },
    {
      title: 'Portrait Sessions',
      emoji: '👤',
      price: 'Starting at $350',
      features: [
        '1-hour session',
        '20+ edited photos',
        'Multiple outfit changes',
        'Digital download'
      ]
    },
    {
      title: 'Event Photography',
      emoji: '🎉',
      price: 'Starting at $800',
      features: [
        'Event coverage',
        'Professional editing',
        'Quick turnaround',
        'Digital gallery'
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Services</h1>
          <p className="text-xl text-white/80 mb-8">
            Professional photography services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass p-8">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{service.emoji}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-purple-200 font-semibold">{service.price}</p>
              </div>
              
              <ul className="text-white/80 mb-8 space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="text-center">
                <Link href="/booking" className="booking-btn w-full inline-block">
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-strong p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need Something Custom?
          </h2>
          <p className="text-white/80 mb-6">
            We offer customized packages to fit your specific needs and budget.
          </p>
          <Link href="/booking" className="booking-btn">
            📞 Contact Us for Custom Quote
          </Link>
        </div>
      </div>
    </div>
  )
}