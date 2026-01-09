import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="glass mt-20 mx-4 mb-4 px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">PhotoStudio</h3>
            <p className="text-white/80 mb-6 max-w-md">
              Professional photography services capturing your most precious moments with
              artistic excellence and modern style.
            </p>
            <Link href="/booking" className="booking-btn-secondary booking-btn">
              📸 Book Your Session
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-white/80 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/80">
              <li>📧 hello@photostudio.com</li>
              <li>📞 (555) 123-4567</li>
              <li>📍 123 Photography St</li>
              <li>New York, NY 10001</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 PhotoStudio. All rights reserved.
          </p>
          
          {/* Additional Booking CTA */}
          <div className="flex items-center space-x-4">
            <span className="text-white/80 text-sm">Ready to book?</span>
            <Link href="/booking" className="booking-btn">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}