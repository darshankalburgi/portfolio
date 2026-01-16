'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (scrollPx / winHeightPx) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ opacity: 0, y: -10 }}
      animate={{ 
        opacity: scrollProgress > 2 ? 1 : 0,
        y: scrollProgress > 2 ? 0 : -10
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Background track */}
      <div className="h-1 relative overflow-hidden">
        {/* Animated gradient progress bar */}
        <motion.div
          className="h-full relative"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1, ease: 'easeOut' }}
        >
          {/* Main gradient bar */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink" />
          
          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ width: '50%' }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

