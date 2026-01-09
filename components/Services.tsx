'use client'

import { useState, useEffect } from 'react'
import { Service } from '@/lib/types'

interface ServicesProps {
  services?: Service[]
  showPricing?: boolean
}

export function Services({ services = [], showPricing = true }: ServicesProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Mock services data
  const mockServices = [
    {
      id: '1',
      name: 'Portrait Photography',
      description: 'Professional portrait sessions for individuals, couples, and families. Includes studio or outdoor locations.',
      price: 299,
      duration: 120,
      isActive: true,
      features: ['1-2 Hour Session', 'Professional Editing', '20+ Digital Images', 'Online Gallery']
    },
    {
      id: '2',
      name: 'Wedding Photography',
      description: 'Complete wedding day coverage capturing every special moment from preparation to celebration.',
      price: 1299,
      duration: 480,
      isActive: true,
      features: ['Full Day Coverage', '500+ Photos', 'Engagement Session', 'Online Gallery', 'USB Drive']
    },
    {
      id: '3',
      name: 'Event Photography',
      description: 'Professional coverage for corporate events, parties, and special celebrations.',
      price: 599,
      duration: 240,
      isActive: true,
      features: ['4 Hour Coverage', 'Professional Editing', '100+ Images', 'Same Day Preview']
    },
    {
      id: '4',
      name: 'Product Photography',
      description: 'High-quality product photos for e-commerce, catalogs, and marketing materials.',
      price: 199,
      duration: 90,
      isActive: true,
      features: ['Studio Setup', 'Multiple Angles', 'White Background', 'Quick Turnaround']
    }
  ]

  if (!mounted) return null

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Photography Services
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Professional photography services tailored to capture your most important moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {mockServices.map((service, index) => (
            <div
              key={service.id}
              className="glass rounded-3xl p-8 hover:scale-105 transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.name}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-white/80 flex items-center">
                      <span className="text-blue-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              {showPricing && (
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-3xl font-bold text-white">
                      ${service.price}
                    </span>
                    <span className="text-white/60 ml-2">
                      {service.duration && `/ ${Math.floor(service.duration / 60)}h session`}
                    </span>
                  </div>
                </div>
              )}

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-full transition-all duration-300">
                Book This Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}