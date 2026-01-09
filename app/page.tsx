"use client";

import { motion } from "framer-motion";
import { Camera, Heart, Users, Award, Mail, Phone, Instagram } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeSpecialty, setActiveSpecialty] = useState('weddings');

  const specialties = {
    weddings: {
      title: "Wedding Photography",
      description: "Capturing your most precious moments with elegance and artistry. From intimate ceremonies to grand celebrations, we preserve the magic of your special day.",
      features: [
        "Engagement sessions",
        "Ceremony coverage",
        "Reception photography", 
        "Bridal portraits",
        "Detail shots",
        "Candid moments"
      ],
      images: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop&crop=center"
      ]
    },
    events: {
      title: "Event Photography",
      description: "Professional coverage for corporate events, parties, and special occasions. We capture the energy, emotions, and key moments that make your event memorable.",
      features: [
        "Corporate events",
        "Birthday parties",
        "Anniversary celebrations",
        "Product launches",
        "Networking events",
        "Award ceremonies"
      ],
      images: [
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop&crop=center"
      ]
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 glass"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <Camera className="h-8 w-8 text-purple-300" />
              <span className="text-xl font-bold text-gradient">LensArt Studio</span>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-purple-300 transition-colors">Home</a>
              <a href="#specialties" className="hover:text-purple-300 transition-colors">Specialties</a>
              <a href="#portfolio" className="hover:text-purple-300 transition-colors">Portfolio</a>
              <a href="#contact" className="hover:text-purple-300 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gradient">
                Capturing Life's
                <br />
                Beautiful Moments
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Professional photography with a modern, elegant approach. 
                Specializing in weddings and events that tell your unique story.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass glass-hover px-8 py-4 rounded-full font-semibold text-lg"
              >
                View Our Work
              </motion.button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass rounded-3xl p-8 animate-float">
                <Image
                  src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=400&fit=crop&crop=center"
                  alt="Professional Photography"
                  width={600}
                  height={400}
                  className="rounded-2xl w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialty Section - Wedding & Events */}
      <section id="specialties" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">
              Our Specialties
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in creating timeless memories through our wedding and event photography services.
            </p>
          </motion.div>

          {/* Specialty Tabs */}
          <div className="flex justify-center mb-12">
            <div className="glass rounded-full p-2">
              {Object.keys(specialties).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveSpecialty(key)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    activeSpecialty === key 
                      ? 'bg-purple-500 text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {key === 'weddings' ? (
                    <span className="flex items-center gap-2">
                      <Heart className="h-4 w-4" />
                      Weddings
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Events
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Active Specialty Content */}
          <motion.div 
            key={activeSpecialty}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="glass rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-gradient">
                {specialties[activeSpecialty as keyof typeof specialties].title}
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                {specialties[activeSpecialty as keyof typeof specialties].description}
              </p>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-purple-400" />
                  What We Offer
                </h4>
                <ul className="grid grid-cols-2 gap-3">
                  {specialties[activeSpecialty as keyof typeof specialties].features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass glass-hover px-6 py-3 rounded-full font-semibold"
              >
                Get Quote
              </motion.button>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {specialties[activeSpecialty as keyof typeof specialties].images.map((image, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`glass rounded-2xl overflow-hidden ${index === 0 ? 'col-span-2' : ''}`}
                >
                  <Image
                    src={image}
                    alt={`${specialties[activeSpecialty as keyof typeof specialties].title} ${index + 1}`}
                    width={400}
                    height={index === 0 ? 300 : 200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">
              Recent Work
            </h2>
            <p className="text-xl text-gray-300">
              A glimpse into our recent weddings and events
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop", 
              "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=400&h=300&fit=crop"
            ].map((image, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`Portfolio ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">
              Let's Create Magic Together
            </h2>
            <p className="text-xl text-gray-300">
              Ready to capture your special moments? Get in touch today.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-purple-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-purple-400" />
                  <span>hello@lensartstudio.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram className="h-5 w-5 text-purple-400" />
                  <span>@lensartstudio</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Quick Inquiry</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 glass rounded-lg bg-white/5 border border-white/20 focus:border-purple-400 focus:outline-none"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-3 glass rounded-lg bg-white/5 border border-white/20 focus:border-purple-400 focus:outline-none"
                />
                <textarea 
                  placeholder="Tell us about your event" 
                  rows={4}
                  className="w-full p-3 glass rounded-lg bg-white/5 border border-white/20 focus:border-purple-400 focus:outline-none resize-none"
                ></textarea>
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full glass glass-hover py-3 rounded-lg font-semibold"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 LensArt Studio. All rights reserved. Capturing moments, creating memories.
          </p>
        </div>
      </footer>
    </div>
  );
}