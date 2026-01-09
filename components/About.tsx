export default function About() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="glass-effect p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Matthew Kijewski
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-white text-opacity-90 leading-relaxed mb-6">
                With over a decade of experience in professional photography, Matthew Kijewski 
                specializes in capturing the essence of every moment. From intimate portraits 
                to grand landscapes, every shot tells a unique story.
              </p>
              <p className="text-lg text-white text-opacity-90 leading-relaxed">
                Based in the heart of creativity, Matthew brings a fresh perspective to 
                traditional photography, combining technical expertise with artistic vision 
                to create truly memorable images.
              </p>
            </div>
            
            <div className="glass-effect p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Specialties</h3>
              <ul className="space-y-3">
                {[
                  'Portrait Photography',
                  'Wedding Photography',
                  'Landscape Photography',
                  'Commercial Photography',
                  'Event Photography'
                ].map((specialty, index) => (
                  <li key={index} className="flex items-center text-white text-opacity-90">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></div>
                    {specialty}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}