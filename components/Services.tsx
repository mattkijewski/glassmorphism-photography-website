'use client'

import { Camera, Users, Heart, Briefcase } from 'lucide-react'

const services = [
  {
    icon: Camera,
    title: 'Portrait Photography',
    description: 'Professional headshots and personal portraits that capture your essence',
    price: 'Starting at $299'
  },
  {
    icon: Heart,
    title: 'Wedding Photography',
    description: 'Your special day captured with artistic vision and emotional depth',
    price: 'Starting at $2,499'
  },
  {
    icon: Users,
    title: 'Family Sessions',
    description: 'Beautiful family moments preserved for generations to come',
    price: 'Starting at $399'
  },
  {
    icon: Briefcase,
    title: 'Corporate Events',
    description: 'Professional event coverage for your business occasions',
    price: 'Starting at $899'
  }
]

export default function Services() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Professional photography services tailored to capture your most important moments
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="glass-card hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4">
                  <IconComponent className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-white/70 mb-4 text-sm leading-relaxed">{service.description}</p>
                <p className="text-blue-400 font-semibold">{service.price}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}