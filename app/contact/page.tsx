import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-white/80">
            Get in touch to discuss your photography needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
            <div className="space-y-4 text-white/80">
              <div className="flex items-center">
                <span className="text-2xl mr-3">📧</span>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p>hello@photostudio.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">📞</span>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">📍</span>
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <p>123 Photography St<br />New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Business Hours</h2>
            <div className="space-y-3 text-white/80">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9AM - 6PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10AM - 4PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>By appointment</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Response</h3>
              <p className="text-white/80 text-sm mb-4">
                We typically respond to inquiries within 24 hours
              </p>
              <Link href="/booking" className="booking-btn w-full inline-block text-center">
                📅 Book Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="glass-strong p-8 mt-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-white/80 mb-6">
            The best way to discuss your photography needs is to book a consultation
          </p>
          <Link href="/booking" className="booking-btn">
            📸 Book Your Session Now
          </Link>
        </div>
      </div>
    </div>
  )
}