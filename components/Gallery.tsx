export default function Gallery() {
  const galleryImages = [
    { id: 1, category: 'Portrait' },
    { id: 2, category: 'Landscape' },
    { id: 3, category: 'Wedding' },
    { id: 4, category: 'Commercial' },
    { id: 5, category: 'Event' },
    { id: 6, category: 'Portrait' },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-xl text-white text-opacity-80 mb-8">
            Explore Matthew Kijewski's finest work
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="glass-effect p-4 group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg aspect-square flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-6xl text-white opacity-50 mb-2">📸</div>
                  <p className="text-white font-medium">{image.category}</p>
                </div>
              </div>
              <p className="text-white text-opacity-90 text-center">
                {image.category} Photography by Matthew Kijewski
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}