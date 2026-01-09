import { Prisma } from '@prisma/client'

// Type helpers for database queries
export type GalleryWithImages = Prisma.GalleryGetPayload<{
  include: {
    images: true
  }
}>

export type UserWithBookings = Prisma.UserGetPayload<{
  include: {
    bookings: {
      include: {
        service: true
      }
    }
  }
}>

export type BookingWithDetails = Prisma.BookingGetPayload<{
  include: {
    user: true
    service: true
  }
}>

export type ImageWithGallery = Prisma.ImageGetPayload<{
  include: {
    gallery: true
  }
}>

// Component prop types
export interface HeroProps {
  title?: string
  subtitle?: string
  backgroundImage?: string
}

export interface GalleryProps {
  galleries?: GalleryWithImages[]
  featured?: boolean
}

export interface ServiceProps {
  services?: Service[]
  showPricing?: boolean
}

// Form types
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export interface BookingFormData {
  serviceId: string
  date: string
  time: string
  notes?: string
}

// API response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Import Prisma types
export type {
  User,
  Gallery,
  Image,
  Service,
  Booking,
  Inquiry,
  Settings,
  Role,
  BookingStatus,
} from '@prisma/client'