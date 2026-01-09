'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  
  const categories = ['All', 'Wedding', 'Portrait', 'Event', 'Commercial']
  
  const portfolioItems = [
    {
      id: 1,
      title: 'Wedding Ceremony',
      category: 'Wedding',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=500&fit=crop',
    },
    {
      id: 2,
      title: 'Professional Portrait',
      category: 'Portrait',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b632?w=400&h=500&fit=crop',
    },
    {
      id: 3,
      title: 'Corporate Event',
      category: 'Event',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=500&fit=crop',
    },
    {
      id: 4,
      title: 'Product Photography',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=500&fit=crop',
    },
    {
      id: 5,
      title: 'Engagement Session',
      category: 'Wedding',
      image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&h=500&fit=crop',
    },
    {
      id: 6,
      title: 'Family Portrait',
      category: 'Portrait',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=500&fit=crop',
    },
  ]

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            My Portfolio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore a collection of my finest work, showcasing the beauty and 
            emotion captured in every frame.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'glass-button text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={500}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-80">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}