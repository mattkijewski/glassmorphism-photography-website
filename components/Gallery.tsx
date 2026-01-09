'use client'

const galleryImages = [
  { id: 1, alt: 'Portrait Photography', category: 'Portrait' },
  { id: 2, alt: 'Wedding Photography', category: 'Wedding' },
  { id: 3, alt: 'Family Photography', category: 'Family' },
  { id: 4, alt: 'Corporate Photography', category: 'Corporate' },
  { id: 5, alt: 'Portrait Photography', category: 'Portrait' },
  { id: 6, alt: 'Wedding Photography', category: 'Wedding' }
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A showcase of our finest work across various photography styles
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="glass-card group overflow-hidden hover:bg-white/15 transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-white/50 text-center">
                  <div className="text-4xl mb-2">📸</div>
                  <div className="text-sm">{image.alt}</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/70">{image.category}</span>
                <span className="text-xs text-blue-400 glass px-2 py-1 rounded-full">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}