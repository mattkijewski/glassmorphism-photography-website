import { Camera, Users, Heart, Briefcase } from 'lucide-react'

const services = [
  {
    icon: Camera,
    title: 'Portrait Photography',
    description: 'Professional portraits for individuals, families, and professionals',
    price: 'From $199',
    duration: '1-2 hours'
  },
  {
    icon: Heart,
    title: 'Wedding Photography',
    description: 'Capture your special day with elegant and timeless photos',
    price: 'From $1,999',
    duration: '8-12 hours'
  },
  {
    icon: Users,
    title: 'Event Photography',
    description: 'Corporate events, parties, and special occasions coverage',
    price: 'From $499',
    duration: '2-6 hours'
  },
  {
    icon: Briefcase,
    title: 'Commercial Photography',
    description: 'Product photography and business promotional content',
    price: 'From $299',
    duration: '2-4 hours'
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-shadow">
            Our Services
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Professional photography services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="glass glass-hover rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  <div className="glass rounded-full p-4">
                    <IconComponent className="w-8 h-8 text-blue-300" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-white/70 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <p className="text-blue-300 font-semibold">{service.price}</p>
                  <p className="text-white/60 text-sm">{service.duration}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}