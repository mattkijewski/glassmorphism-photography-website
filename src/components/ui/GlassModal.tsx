'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'
import { X } from 'lucide-react'
import { GlassCard } from './GlassCard'

interface GlassModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function GlassModal({
  isOpen,
  onClose,
  children,
  title,
  size = 'md'
}: GlassModalProps) {
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`relative w-full ${sizeClasses[size]}`}
            >
              <GlassCard className="p-6">
                {/* Header */}
                {title && (
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-white">{title}</h2>
                    <button
                      onClick={onClose}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      <X size={24} />
                    </button>
                  </div>
                )}

                {/* Content */}
                <div>{children}</div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}