'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassInputProps {
  type?: 'text' | 'email' | 'tel' | 'password' | 'textarea'
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  label?: string
  icon?: ReactNode
  required?: boolean
  className?: string
  rows?: number
}

export function GlassInput({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  icon,
  required = false,
  className = '',
  rows = 4
}: GlassInputProps) {
  const inputClasses = `
    w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20
    rounded-xl text-white placeholder-gray-300 backdrop-blur-md
    focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent
    transition-all duration-200
  `

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative ${className}`}
    >
      {label && (
        <label className="block text-sm font-medium text-gray-200 mb-2">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300">
            {icon}
          </div>
        )}
        
        {type === 'textarea' ? (
          <textarea
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            required={required}
            rows={rows}
            className={`${inputClasses} ${icon ? 'pl-10' : ''} resize-none`}
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            required={required}
            className={`${inputClasses} ${icon ? 'pl-10' : ''}`}
          />
        )}
      </div>
    </motion.div>
  )
}