'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="glass-strong fixed top-4 left-4 right-4 z-50 px-6 py-4">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white">
          PhotoStudio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-gray-200 transition-colors">
            Home
          </Link>
          <Link href="/portfolio" className="text-white hover:text-gray-200 transition-colors">
            Portfolio
          </Link>
          <Link href="/services" className="text-white hover:text-gray-200 transition-colors">
            Services
          </Link>
          <Link href="/about" className="text-white hover:text-gray-200 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-200 transition-colors">
            Contact
          </Link>
        </div>

        {/* Booking Button - Desktop */}
        <div className="hidden md:block">
          <Link href="/booking" className="booking-btn">
            📸 Book Session
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-white/20">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-white hover:text-gray-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className="text-white hover:text-gray-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-gray-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-gray-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-gray-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/booking"
              className="booking-btn w-fit"
              onClick={() => setIsMenuOpen(false)}
            >
              📸 Book Session
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}