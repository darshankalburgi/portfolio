'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'

export default function Hero() {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/darshankalburgi', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/darshan-kalburgi-a13113254/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:darshankalburgi6@gmail.com', label: 'Email' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Animated greeting with badge style */}
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-block"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-neon-cyan/30">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-cyan"></span>
              </span>
              <span className="text-neon-cyan text-sm sm:text-base font-medium">Available for opportunities</span>
            </div>
          </motion.div>

          {/* Greeting text */}
          <motion.div
            variants={itemVariants}
            className="mb-4"
          >
            <span className="text-gray-400 text-lg sm:text-xl font-medium">Hi, my name is</span>
          </motion.div>

          {/* Name with enhanced styling */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="text-gradient inline-block">
              Darshan Kalburgi
            </span>
          </motion.h1>

          {/* Title with animated gradient */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
          >
            <motion.span
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                background: 'linear-gradient(90deg, #00f0ff, #b026ff, #ff006e, #00f0ff)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Full Stack Developer
            </motion.span>
          </motion.h2>

          {/* Description with better styling */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed px-4"
          >
            I build <span className="text-neon-cyan font-semibold">exceptional digital experiences</span> with modern technologies.
            Passionate about creating <span className="text-neon-purple font-semibold">innovative solutions</span> that make a difference.
          </motion.p>

          {/* Social links with enhanced design */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 mb-12"
          >
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 0 }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: 'easeInOut',
                }}
                whileHover={{ scale: 1.2, y: -12 }}
                whileTap={{ scale: 0.9 }}
                className="relative group"
                aria-label={label}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                <div className="relative p-4 rounded-full glass-strong border border-white/10 group-hover:border-neon-cyan/50 transition-all duration-300">
                  <Icon className="text-2xl text-gray-300 group-hover:text-neon-cyan transition-colors" />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-center items-center gap-6"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink rounded-xl text-white font-semibold text-lg shadow-neon transition-all duration-300 overflow-hidden w-full md:w-[220px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
              <span className="relative z-10">View My Work</span>
            </motion.a>

            <motion.a
              href="#about"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 glass-strong rounded-xl text-white font-semibold text-lg border border-neon-cyan/30 hover:border-neon-cyan/60 transition-all duration-300 w-full md:w-[180px]"
            >
              <span>About Me</span>
            </motion.a>

            <motion.a
              href="/Darshan_K_resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 glass-strong rounded-xl text-white font-semibold text-lg border border-neon-purple/30 hover:border-neon-purple/60 transition-all duration-300 w-full md:w-[180px]"
            >
              <span>Resume</span>
            </motion.a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
