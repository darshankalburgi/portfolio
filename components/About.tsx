'use client'

import { motion } from 'framer-motion'
import { FaCode, FaServer, FaDatabase, FaCloud } from 'react-icons/fa'

export default function About() {
  const skills = [
    {
      category: 'Frontend',
      icon: FaCode,
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      color: 'from-neon-cyan to-blue-500',
      bgGlow: 'rgba(0, 240, 255, 0.15)',
    },
    {
      category: 'Backend',
      icon: FaServer,
      technologies: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs'],
      color: 'from-neon-purple to-purple-500',
      bgGlow: 'rgba(176, 38, 255, 0.15)',
    },
    {
      category: 'Database',
      icon: FaDatabase,
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
      color: 'from-neon-pink to-pink-500',
      bgGlow: 'rgba(255, 0, 110, 0.15)',
    },
    {
      category: 'DevOps',
      icon: FaCloud,
      technologies: ['Docker', 'AWS', 'CI/CD', 'Git', 'Linux'],
      color: 'from-cyan-500 to-purple-500',
      bgGlow: 'rgba(0, 217, 255, 0.15)',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink mx-auto rounded-full" />
        </motion.div>

        {/* About text with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="glass-strong rounded-3xl p-8 sm:p-12 relative overflow-hidden group">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-neon-purple/5 to-neon-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
                I'm a passionate <span className="text-neon-cyan font-semibold">full stack developer</span> with a love for creating innovative
                digital solutions. With expertise spanning both frontend and backend
                technologies, I bring ideas to life through clean, efficient code.
              </p>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                My approach combines <span className="text-neon-purple font-semibold">technical excellence</span> with creative problem-solving,
                ensuring that every project I work on is not just functional, but also
                provides an exceptional user experience. I'm always learning and staying
                up-to-date with the latest technologies and best practices.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills grid with enhanced cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.03,
                rotateY: 5,
                rotateX: 5,
              }}
              className="relative group preserve-3d"
            >
              {/* Glow effect on hover */}
              <div
                className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
                style={{
                  background: `linear-gradient(135deg, ${skill.bgGlow}, transparent)`,
                }}
              />

              {/* Card content */}
              <div className="relative glass-strong rounded-2xl p-6 sm:p-8 h-full border border-white/10 group-hover:border-white/20 transition-all duration-300">
                {/* Icon with gradient background */}
                <div className="mb-6">
                  <motion.div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${skill.color} shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <skill.icon className="text-3xl text-white" />
                  </motion.div>
                </div>

                {/* Category title */}
                <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-neon-cyan transition-colors duration-300">
                  {skill.category}
                </h3>

                {/* Technologies list */}
                <ul className="space-y-3">
                  {skill.technologies.map((tech, techIndex) => (
                    <motion.li
                      key={tech}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: techIndex * 0.1 }}
                      className="flex items-center group/item"
                    >
                      <motion.div
                        whileHover={{ scale: 1.5, rotate: 180 }}
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple mr-3 flex-shrink-0"
                      />
                      <span className="text-gray-400 group-hover/item:text-gray-200 transition-colors text-sm sm:text-base">
                        {tech}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-20 group-hover:opacity-40 transition-opacity">
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-bl-full`} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

