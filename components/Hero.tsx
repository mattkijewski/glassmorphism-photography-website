'use client'

import { useState, useEffect } from 'react'

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="glass rounded-3xl p-8 md:p-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Capture Life's
            <br />
            Beautiful Moments
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            Professional photography services with a modern touch. 
            Creating stunning visual stories that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="glass hover:bg-white/20 transition-all duration-300 px-8 py-3 rounded-full font-semibold">
              View Portfolio
            </button>
            <button className="bg-white/10 hover:bg-white/20 transition-all duration-300 px-8 py-3 rounded-full font-semibold border border-white/30">
              Book Session
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 glass rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 glass rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 glass rounded-full opacity-20 animate-pulse delay-2000"></div>
    </section>
  )
}