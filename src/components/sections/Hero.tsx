'use client'

import { motion } from 'framer-motion'
import { Camera, Play, Star } from 'lucide-react'
import { GlassCard } from '../ui/GlassCard'
import { GlassButton } from '../ui/GlassButton'

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard className="inline-flex items-center space-x-2 px-4 py-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm">Award-winning Photography</span>
            </GlassCard>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            <span className="text-gradient">Capture Life's</span>
            <br />
            <span className="text-white">Perfect Moments</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Professional photography services with a modern touch. 
            Creating timeless memories through the art of light and glass.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <GlassButton variant="primary" size="lg" href="#portfolio">
              View Portfolio
            </GlassButton>
            <GlassButton variant="outline" size="lg" href="#about">
              <Play className="w-5 h-5 mr-2" />
              Watch Story
            </GlassButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-8 max-w-md mx-auto mt-16"
          >
            {[
              { number: '500+', label: 'Happy Clients' },
              { number: '1000+', label: 'Photos Taken' },
              { number: '5+', label: 'Years Experience' }
            ].map((stat, index) => (
              <GlassCard key={index} className="p-4 text-center">
                <div className="text-2xl font-bold text-gradient">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </GlassCard>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Camera Icon */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute bottom-10 right-10"
      >
        <GlassCard className="p-4">
          <Camera className="w-8 h-8 text-purple-400" />
        </GlassCard>
      </motion.div>
    </section>
  )
}