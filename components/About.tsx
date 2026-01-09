'use client'

import { useState, useEffect } from 'react'

export function About() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Our Studio
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              With over a decade of experience in photography, we specialize in creating 
              stunning visual narratives that capture the essence of every moment.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="glass w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-400">📸</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Professional Equipment</h3>
                  <p className="text-white/60">
                    State-of-the-art cameras and lighting equipment for perfect shots
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="glass w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-400">✨</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Creative Vision</h3>
                  <p className="text-white/60">
                    Unique artistic approach to bring your vision to life
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="glass w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400">⚡</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Quick Turnaround</h3>
                  <p className="text-white/60">
                    Fast delivery of professionally edited photos
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="animate-fade-in delay-300">
            <div className="glass rounded-3xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center text-white/60">
                <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center text-4xl">
                  📷
                </div>
                <h3 className="text-2xl font-semibold mb-4">Studio Preview</h3>
                <p>Professional photography studio space</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}