'use client'

import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <div className="relative py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="relative w-full max-w-lg">
          {/* Main line - very subtle */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative z-10"
          />
        </div>
      </div>
    </div>
  )
}

