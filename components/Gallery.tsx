'use client'

import { useState, useEffect } from 'react'
import { GalleryWithImages } from '@/lib/types'

interface GalleryProps {
  galleries?: GalleryWithImages[]
  featured?: boolean
}

export function Gallery({ galleries = [], featured = true }: GalleryProps) {
  const [mounted, setMounted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    setMounted(true)
  }, [])

  // Mock data for demonstration
  const mockImages = [
    { id: '1', title: 'Portrait Session', url: '/api/placeholder/400/600', category: 'portrait' },
    { id: '2', title: 'Wedding Photography', url: '/api/placeholder/600/400', category: 'wedding' },
    { id: '3', title: 'Nature Shot', url: '/api/placeholder/400/500', category: 'nature' },
    { id: '4', title: 'Event Coverage', url: '/api/placeholder/500/400', category: 'event' },
    { id: '5', title: 'Studio Portrait', url: '/api/placeholder/400/600', category: 'portrait' },
    { id: '6', title: 'Landscape', url: '/api/placeholder/600/400', category: 'nature' },
  ]

  const categories = ['all', 'portrait', 'wedding', 'nature', 'event']

  const filteredImages = selectedCategory === 'all' 
    ? mockImages 
    : mockImages.filter(img => img.category === selectedCategory)

  if (!mounted) return null

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Portfolio Gallery
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore our collection of stunning photographs across different categories
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 capitalize ${
                selectedCategory === category
                  ? 'glass text-white'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl glass hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white/70 text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    📷
                  </div>
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <p className="text-sm text-white/50 capitalize">{image.category}</p>
                </div>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="glass px-6 py-2 rounded-full text-white font-medium">
                    View Full Size
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}