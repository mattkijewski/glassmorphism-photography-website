'use client'

import { useState } from 'react'
import Calendar from 'react-calendar'
import { Clock, User, Mail, Phone, MessageSquare } from 'lucide-react'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

interface BookingForm {
  name: string
  email: string
  phone: string
  service: string
  time: string
  message: string
}

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', 
  '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
]

const services = [
  'Portrait Photography',
  'Wedding Photography', 
  'Family Session',
  'Corporate Event',
  'Consultation'
]

export default function CalendarWidget() {
  const [selectedDate, setSelectedDate] = useState<Value>(new Date())
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [showBookingForm, setShowBookingForm] = useState<boolean>(false)
  const [bookingForm, setBookingForm] = useState<BookingForm>({
    name: '',
    email: '',
    phone: '',
    service: '',
    time: '',
    message: ''
  })

  const handleDateChange = (value: Value) => {
    setSelectedDate(value)
    setSelectedTime('')
    setShowBookingForm(false)
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setBookingForm(prev => ({ ...prev, time }))
    setShowBookingForm(true)
  }

  const handleFormChange = (field: keyof BookingForm, value: string) => {
    setBookingForm(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Here you would typically send the booking data to your backend
    const bookingData = {
      date: selectedDate instanceof Date ? selectedDate.toLocaleDateString() : '',
      time: selectedTime,
      ...bookingForm
    }
    
    console.log('Booking submitted:', bookingData)
    alert('Booking request submitted! We\'ll contact you soon to confirm.')
    
    // Reset form
    setShowBookingForm(false)
    setSelectedTime('')
    setBookingForm({
      name: '',
      email: '',
      phone: '',
      service: '',
      time: '',
      message: ''
    })
  }

  const isWeekend = (date: Date) => {
    const day = date.getDay()
    return day === 0 || day === 6
  }

  const isPastDate = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today
  }

  const tileDisabled = ({ date }: { date: Date }) => {
    return isPastDate(date)
  }

  const tileClassName = ({ date }: { date: Date }) => {
    if (isPastDate(date)) return 'opacity-50 cursor-not-allowed'
    if (isWeekend(date)) return 'text-blue-300'
    return ''
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Calendar Section */}
        <div className="glass-card">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-blue-400" />
            Select Date
          </h3>
          
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            tileDisabled={tileDisabled}
            tileClassName={tileClassName}
            className="w-full"
            minDate={new Date()}
          />
          
          {selectedDate && !isPastDate(selectedDate as Date) && (
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                Available Times
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    className={`glass p-3 rounded-lg transition-all duration-300 text-sm font-medium ${
                      selectedTime === time 
                        ? 'bg-blue-500/50 border-blue-400' 
                        : 'hover:bg-white/20'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Booking Form */}
        <div className="glass-card">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <User className="w-6 h-6 text-blue-400" />
            Booking Details
          </h3>

          {!showBookingForm ? (
            <div className="text-center text-white/70 py-12">
              <Clock className="w-12 h-12 mx-auto mb-4 text-white/50" />
              <p>Please select a date and time to continue with your booking</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={bookingForm.name}
                    onChange={(e) => handleFormChange('name', e.target.value)}
                    className="w-full glass rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Service Type *
                  </label>
                  <select
                    required
                    value={bookingForm.service}
                    onChange={(e) => handleFormChange('service', e.target.value)}
                    className="w-full glass rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="text-black">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={bookingForm.email}
                    onChange={(e) => handleFormChange('email', e.target.value)}
                    className="w-full glass rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={bookingForm.phone}
                    onChange={(e) => handleFormChange('phone', e.target.value)}
                    className="w-full glass rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Additional Message
                </label>
                <textarea
                  rows={4}
                  value={bookingForm.message}
                  onChange={(e) => handleFormChange('message', e.target.value)}
                  className="w-full glass rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                  placeholder="Tell us more about your photography needs..."
                />
              </div>

              {/* Booking Summary */}
              <div className="glass rounded-lg p-4 bg-blue-500/10">
                <h4 className="font-semibold text-blue-400 mb-2">Booking Summary</h4>
                <div className="text-sm text-white/80 space-y-1">
                  <p><strong>Date:</strong> {selectedDate instanceof Date ? selectedDate.toLocaleDateString() : ''}</p>
                  <p><strong>Time:</strong> {selectedTime}</p>
                  <p><strong>Service:</strong> {bookingForm.service || 'Not selected'}</p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full glass-card hover:bg-blue-500/20 transition-all duration-300 py-4 font-semibold text-lg border-blue-400/50"
              >
                Submit Booking Request
              </button>
              
              <p className="text-xs text-white/60 text-center">
                * We'll contact you within 24 hours to confirm your booking
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}