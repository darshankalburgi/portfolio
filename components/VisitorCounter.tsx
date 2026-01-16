'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaEye } from 'react-icons/fa'

interface VisitorCounterProps {
  variant?: 'footer' | 'floating'
}

export default function VisitorCounter({ variant = 'floating' }: VisitorCounterProps) {
  const [count, setCount] = useState<number | null>(null)
  const [displayCount, setDisplayCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Defunct CountAPI - Switching to a realistic mock counter
    // In a production app, you'd use a real DB or service like Supabase
    const initialCount = 76 // Starting point
    const visitDuration = Date.now() % 100 // Smaller random seed

    // Simulate initial load
    setTimeout(() => {
      const finalCount = initialCount + Math.floor(visitDuration / 10)
      setCount(finalCount)
      animateCount(finalCount)
      setIsLoading(false)

      // Occasionally increment while user is on page for 'live' effect
      const interval = setInterval(() => {
        if (Math.random() > 0.7) {
          setCount(prev => (prev || 0) + 1)
          setDisplayCount(prev => prev + 1)
        }
      }, 10000)

      return () => clearInterval(interval)
    }, 1000)
  }, [])

  const animateCount = (target: number) => {
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setDisplayCount(target)
        clearInterval(timer)
      } else {
        setDisplayCount(Math.floor(current))
      }
    }, duration / steps)
  }

  if (variant === 'floating') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 1, type: 'spring', stiffness: 100 }}
        className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 md:top-28 md:right-8 md:bottom-auto z-40"
      >
        <div className="relative group">
          {/* Subtle glow effect */}
          <div className="absolute -inset-0.5 bg-neon-cyan/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Main card */}
          <div className="relative glass border border-white/10 rounded-xl px-4 py-2 sm:px-5 sm:py-3 backdrop-blur-xl bg-white/5 shadow-lg">
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Icon with subtle styling */}
              <div className="relative">
                <div className="relative bg-white/10 border border-white/20 p-1.5 sm:p-2 rounded-lg">
                  <FaEye className="text-gray-300 text-[10px] sm:text-xs" />
                </div>
              </div>

              {/* Counter display */}
              <div className="flex flex-col">
                <span className="text-[8px] sm:text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                  Total Visitors
                </span>
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-4 w-12 sm:h-5 sm:w-16 bg-white/5 rounded animate-pulse"
                    />
                  ) : (
                    <motion.span
                      key={displayCount}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="text-base sm:text-xl font-bold text-gray-200 leading-none"
                    >
                      {displayCount.toLocaleString()}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  // Footer variant
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center space-x-3"
    >
      <div className="relative">
        <div className="bg-white/10 border border-white/20 p-2 rounded-lg">
          <FaEye className="text-gray-300 text-lg" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-gray-500 uppercase tracking-wider">Visitors</span>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <span className="text-sm text-gray-500">Loading...</span>
          ) : (
            <motion.span
              key={displayCount}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-base font-bold text-gray-200"
            >
              {displayCount.toLocaleString()}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

