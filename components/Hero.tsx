'use client'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Name Display */}
        <div className="glass-effect p-12 mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text animate-glow">
            Matthew Kijewski
          </h1>
          <p className="text-xl md:text-2xl text-white text-opacity-90 font-light">
            Professional Photography
          </p>
        </div>

        {/* Subtitle */}
        <div className="glass-effect p-8">
          <p className="text-lg md:text-xl text-white text-opacity-80 leading-relaxed">
            Capturing life's most beautiful moments through the lens of creativity and passion
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="glass-button text-lg font-medium">
              View Portfolio
            </button>
            <button className="glass-button text-lg font-medium">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}