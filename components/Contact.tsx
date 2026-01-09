export default function Contact() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass-effect p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Work with Matthew Kijewski
            </h2>
            <p className="text-xl text-white text-opacity-80">
              Ready to capture your special moments? Let's create something beautiful together.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-effect p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white text-sm">📧</span>
                  </div>
                  <p className="text-white text-opacity-90">matthew@kijewskiphotography.com</p>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white text-sm">📱</span>
                  </div>
                  <p className="text-white text-opacity-90">(555) 123-4567</p>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <p className="text-white text-opacity-90">Available Worldwide</p>
                </div>
              </div>
            </div>

            <div className="glass-effect p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Quote</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:border-opacity-40"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:border-opacity-40"
                />
                <textarea
                  placeholder="Tell Matthew about your project..."
                  rows={4}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:border-opacity-40 resize-none"
                ></textarea>
                <button type="submit" className="glass-button w-full text-center">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}