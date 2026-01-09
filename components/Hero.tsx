'use client'

import { Camera, Star, Award } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="glass-card mb-8 inline-block">
          <Camera className="w-8 h-8 text-blue-400 mx-auto" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
          Elite Photography
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
          Capturing life's most precious moments with artistic vision and technical excellence
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="glass-card flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-sm">5.0 Rating</span>
          </div>
          <div className="glass-card flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-400" />
            <span className="text-sm">Award Winning</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="glass-card hover:bg-white/20 transition-all duration-300 px-8 py-4 font-semibold text-lg"
          >
            Book Session
          </button>
          <button 
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="glass-card hover:bg-white/20 transition-all duration-300 px-8 py-4 font-semibold text-lg"
          >
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  )
}