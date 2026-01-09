const portfolioImages = [
  {
    src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=500&h=600&fit=crop',
    alt: 'Portrait Photography',
    category: 'Portrait'
  },
  {
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&h=600&fit=crop',
    alt: 'Wedding Photography',
    category: 'Wedding'
  },
  {
    src: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=500&h=600&fit=crop',
    alt: 'Event Photography',
    category: 'Event'
  },
  {
    src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=600&fit=crop',
    alt: 'Commercial Photography',
    category: 'Commercial'
  },
  {
    src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=600&fit=crop',
    alt: 'Fashion Portrait',
    category: 'Portrait'
  },
  {
    src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=500&h=600&fit=crop',
    alt: 'Wedding Ceremony',
    category: 'Wedding'
  }
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-shadow">
            Portfolio
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A glimpse of our recent work and captured moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl glass hover:scale-105 transition-all duration-500"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-blue-500/80 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}