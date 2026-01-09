'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            <span className="block text-gray-800 dark:text-white">Capturing</span>
            <span className="block gradient-text">Life's</span>
            <span className="block text-gray-800 dark:text-white">Moments</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg">
            Professional photography services that transform your precious moments into 
            timeless art. Every shot tells a story.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors duration-300"
            >
              View Portfolio
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 glass-button text-gray-700 dark:text-gray-300 font-semibold"
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="glass-card p-8">
            <Image
              src="https://images.unsplash.com/photo-1554048612-b6a482b224ee?w=600&h=800&fit=crop"
              alt="Professional photographer at work"
              width={600}
              height={800}
              className="w-full h-96 object-cover rounded-lg"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  )
}