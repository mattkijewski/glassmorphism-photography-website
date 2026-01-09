import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h1>
          <p className="text-xl text-white/80">
            Passionate photographers dedicated to capturing life's precious moments
          </p>
        </div>

        <div className="glass-strong p-8 md:p-12 mb-8">
          <div className="text-center mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
              📷
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
          </div>
          
          <div className="text-white/80 space-y-4">
            <p>
              Welcome to PhotoStudio, where passion meets artistry. We are a team of dedicated 
              photographers who believe that every moment deserves to be captured beautifully.
            </p>
            <p>
              With over 10 years of experience in the industry, we specialize in wedding photography, 
              portraits, and event coverage. Our modern glassmorphism aesthetic reflects our 
              commitment to contemporary style while honoring timeless photographic principles.
            </p>
            <p>
              We pride ourselves on creating a comfortable, enjoyable experience for our clients 
              while delivering exceptional results that exceed expectations.
            </p>
          </div>
        </div>

        <div className="glass p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h3>
          <p className="text-white/80 mb-6">
            Let's create something beautiful together. Book your session today!
          </p>
          <Link href="/booking" className="booking-btn">
            📸 Book Your Session
          </Link>
        </div>
      </div>
    </div>
  )
}