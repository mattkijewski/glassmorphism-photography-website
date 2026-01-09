import { Camera, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        {/* Logo/Brand */}
        <div className="flex items-center justify-center mb-8">
          <div className="glass rounded-full p-6 animate-glow">
            <Camera className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow">
          Capture
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            {' '}Moments
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl text-white/80 mb-8 leading-relaxed">
          Professional photography services with a modern touch. 
          Book your session today without any hassle.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#booking"
            className="glass glass-hover rounded-full px-8 py-4 text-white font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Book Now
          </a>
          
          <a
            href="#portfolio"
            className="border border-white/30 hover:border-white/50 rounded-full px-8 py-4 text-white font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center gap-2"
          >
            View Portfolio
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}