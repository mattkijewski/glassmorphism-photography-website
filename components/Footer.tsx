'use client'

import { Camera, Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Camera className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold">Elite Photography</h3>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Professional photography services capturing life's most precious moments 
              with artistic vision and technical excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="glass p-3 rounded-lg hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="glass p-3 rounded-lg hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="glass p-3 rounded-lg hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-white/70">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@elitephoto.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>123 Studio Ave, City</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Portrait Photography</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wedding Photography</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Family Sessions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Corporate Events</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; 2024 Elite Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}