'use client'

import { motion } from 'framer-motion'
import { Award, Users, Camera, Heart } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const stats = [
    { icon: Camera, value: '500+', label: 'Projects Completed' },
    { icon: Users, value: '200+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Awards Won' },
    { icon: Heart, value: '5', label: 'Years Experience' },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm passionate about capturing the essence of life through my lens. 
            With years of experience and a keen eye for detail, I create stunning 
            visual stories that you'll treasure forever.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-8">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
                alt="Professional photographer portrait"
                width={500}
                height={600}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300">
                Hi, I'm John Smith, a professional photographer based in New York. 
                I specialize in wedding photography, portraits, and commercial shoots. 
                My approach combines technical expertise with artistic vision to create 
                images that not only look beautiful but also tell meaningful stories.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                When I'm not behind the camera, you can find me exploring new locations, 
                experimenting with different techniques, or spending time with my family. 
                Photography isn't just my profession – it's my passion.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  <stat.icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-800 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}