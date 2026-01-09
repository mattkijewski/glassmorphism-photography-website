export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Portfolio</h1>
          <p className="text-xl text-white/80 mb-8">
            Explore our collection of beautiful moments captured
          </p>
          <div className="glass-strong p-8">
            <p className="text-white/80 mb-6">
              Our portfolio showcases the artistry and passion we bring to every shoot.
              From intimate portraits to grand celebrations, each image tells a unique story.
            </p>
            <div className="text-center">
              <a href="/booking" className="booking-btn">
                📸 Book Your Session
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}