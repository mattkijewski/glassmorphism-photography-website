'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Camera, CheckCircle } from 'lucide-react'

export type BookingFormData = {
  name: string
  email: string
  phone: string
  serviceType: string
  preferredDate: string
  preferredTime: string
  message: string
}

const serviceOptions = [
  { value: 'portrait', label: 'Portrait Photography', icon: User },
  { value: 'wedding', label: 'Wedding Photography', icon: Camera },
  { value: 'event', label: 'Event Photography', icon: Calendar },
  { value: 'commercial', label: 'Commercial Photography', icon: Camera },
  { value: 'consultation', label: 'Free Consultation', icon: MessageSquare },
]

export function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>()

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Guest booking submitted:', data)
      setIsSubmitted(true)
      reset()
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error('Error submitting booking:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="glass rounded-full p-6 w-fit mx-auto mb-6 animate-pulse">
          <CheckCircle className="w-12 h-12 text-green-400" />
        </div>
        <h3 className="text-2xl font-semibold text-white mb-4">
          Booking Request Submitted!
        </h3>
        <p className="text-white/80 mb-6 max-w-md mx-auto">
          Thank you for your interest! We'll get back to you within 24 hours to confirm your booking and discuss details.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="glass glass-hover rounded-full px-6 py-3 text-white font-medium transition-all duration-300 hover:scale-105"
        >
          Book Another Session
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-white mb-2">
          Guest Booking
        </h3>
        <p className="text-white/70">
          No account required - just fill out the form below
        </p>
      </div>

      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-white font-medium mb-2">
            <User className="inline w-4 h-4 mr-2" />
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-white font-medium mb-2">
            <Mail className="inline w-4 h-4 mr-2" />
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-white font-medium mb-2">
          <Phone className="inline w-4 h-4 mr-2" />
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone')}
          className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          placeholder="Enter your phone number"
        />
      </div>

      {/* Service Selection */}
      <div>
        <label className="block text-white font-medium mb-3">
          <Camera className="inline w-4 h-4 mr-2" />
          Service Type *
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {serviceOptions.map((option) => {
            const IconComponent = option.icon
            return (
              <label
                key={option.value}
                className="glass glass-hover rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-105 flex items-center space-x-3"
              >
                <input
                  type="radio"
                  value={option.value}
                  {...register('serviceType', { required: 'Please select a service type' })}
                  className="sr-only"
                />
                <IconComponent className="w-5 h-5 text-blue-300" />
                <span className="text-white text-sm font-medium">
                  {option.label}
                </span>
              </label>
            )
          })}
        </div>
        {errors.serviceType && (
          <p className="text-red-400 text-sm mt-1">{errors.serviceType.message}</p>
        )}
      </div>

      {/* Date and Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="preferredDate" className="block text-white font-medium mb-2">
            <Calendar className="inline w-4 h-4 mr-2" />
            Preferred Date *
          </label>
          <input
            type="date"
            id="preferredDate"
            {...register('preferredDate', { required: 'Please select a preferred date' })}
            min={new Date().toISOString().split('T')[0]}
            className="w-full glass rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          />
          {errors.preferredDate && (
            <p className="text-red-400 text-sm mt-1">{errors.preferredDate.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-white font-medium mb-2">
            <Clock className="inline w-4 h-4 mr-2" />
            Preferred Time *
          </label>
          <select
            id="preferredTime"
            {...register('preferredTime', { required: 'Please select a preferred time' })}
            className="w-full glass rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 bg-transparent"
          >
            <option value="" className="bg-gray-800">Select a time</option>
            <option value="09:00" className="bg-gray-800">9:00 AM</option>
            <option value="10:00" className="bg-gray-800">10:00 AM</option>
            <option value="11:00" className="bg-gray-800">11:00 AM</option>
            <option value="12:00" className="bg-gray-800">12:00 PM</option>
            <option value="13:00" className="bg-gray-800">1:00 PM</option>
            <option value="14:00" className="bg-gray-800">2:00 PM</option>
            <option value="15:00" className="bg-gray-800">3:00 PM</option>
            <option value="16:00" className="bg-gray-800">4:00 PM</option>
            <option value="17:00" className="bg-gray-800">5:00 PM</option>
            <option value="18:00" className="bg-gray-800">6:00 PM</option>
          </select>
          {errors.preferredTime && (
            <p className="text-red-400 text-sm mt-1">{errors.preferredTime.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-white font-medium mb-2">
          <MessageSquare className="inline w-4 h-4 mr-2" />
          Additional Details
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
          className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 resize-none"
          placeholder="Tell us more about your vision, location preferences, or any special requirements..."
        />
      </div>

      {/* Submit Button */}
      <div className="text-center pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="glass glass-hover rounded-full px-8 py-4 text-white font-semibold text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 min-w-[200px]"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Submitting...</span>
            </div>
          ) : (
            'Submit Booking Request'
          )}
        </button>
        
        <p className="text-white/60 text-sm mt-4">
          We'll respond within 24 hours to confirm your booking
        </p>
      </div>
    </form>
  )
}