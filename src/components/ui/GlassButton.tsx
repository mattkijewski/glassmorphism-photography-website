'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
}

export function GlassButton({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false
}: GlassButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl'
  
  const variantClasses = {
    primary: 'glass text-white hover:bg-purple-500 hover:bg-opacity-20 border-purple-400',
    secondary: 'glass text-white hover:bg-white hover:bg-opacity-20',
    outline: 'border-2 border-white border-opacity-30 text-white hover:bg-white hover:bg-opacity-10'
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer'

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`

  const buttonContent = (
    <motion.div
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      className={classes}
      onClick={!disabled ? onClick : undefined}
    >
      {children}
    </motion.div>
  )

  if (href && !disabled) {
    return (
      <a href={href}>
        {buttonContent}
      </a>
    )
  }

  return buttonContent
}