'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  variant?: 'default' | 'dark' | 'light'
}

export function GlassCard({
  children,
  className = '',
  hover = false,
  variant = 'default'
}: GlassCardProps) {
  const baseClasses = 'rounded-2xl'
  
  const variantClasses = {
    default: 'glass',
    dark: 'glass-dark',
    light: 'bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-30'
  }

  const hoverClasses = hover ? 'glass-hover cursor-pointer' : ''

  return (
    <motion.div
      whileHover={hover ? { scale: 1.02 } : {}}
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}
    >
      {children}
    </motion.div>
  )
}