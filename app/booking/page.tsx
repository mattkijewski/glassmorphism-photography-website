export default function BookingPage() {
  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="glass-strong p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Book Your Photography Session
          </h1>
          <p className="text-white/80 text-center mb-8">
            Ready to capture your special moments? Get in touch with us to schedule your session.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-3 text-white/80">
                <p>📧 hello@photostudio.com</p>
                <p>📞 (555) 123-4567</p>
                <p>📍 123 Photography St, New York, NY 10001</p>
              </div>
              
              <h4 className="text-lg font-semibold text-white mt-6 mb-3">Business Hours</h4>
              <div className="space-y-1 text-white/80 text-sm">
                <p>Monday - Friday: 9AM - 6PM</p>
                <p>Saturday: 10AM - 4PM</p>
                <p>Sunday: By appointment</p>
              </div>
            </div>
            
            <div className="glass p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Booking</h3>
              <p className="text-white/80 mb-4">
                For immediate booking, call us at (555) 123-4567 or email hello@photostudio.com
              </p>
              
              <h4 className="text-lg font-semibold text-white mb-3">Popular Packages</h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>• Wedding Photography - Starting at $2,500</p>
                <p>• Portrait Session - Starting at $350</p>
                <p>• Event Photography - Starting at $800</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-white/80 mb-4">
              Have questions? We'd love to hear from you!
            </p>
            <a href="mailto:hello@photostudio.com" className="booking-btn">
              📧 Send us an Email
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}