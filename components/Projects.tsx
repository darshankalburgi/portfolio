'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
}

const projects: Project[] = [
  {
    title: 'Ai Chatbot Platform - MERN Stack',
    description: 'A modern chatbot platform built with the MERN stack, featuring project-based AI agents with document text extraction (PDF/Plain Text), chat persistence, and interactive AI responses powered by OpenRouter.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'OpenRouter API', 'pdf-parse', 'JWT'],
    githubUrl: 'https://github.com/darshankalburgi/chatbot.git',
    liveUrl: 'https://chatbot-eight-vert.vercel.app',
    image: '/chatbot.jpg',
  },
  {
    title: 'Chatter - Real-time Chat Application',
    description: 'A comprehensive, end-to-end messaging platform featuring real-time communication with Socket.io, custom JWT authentication, and image sharing. Built with a focus on scalability, clean code, and production-ready engineering workflows.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Zustand', 'Cloudinary', 'Arcjet', 'Resend', 'Tailwind CSS'],
    githubUrl: 'https://github.com/darshankalburgi/Chatter.git',
    liveUrl: 'https://chatter-y58fs.sevalla.app/',
    image: '/chatter.png',
  },
  {
    title: 'Stream-it - Live Streaming Platform',
    description: 'A scalable live streaming platform integrating RTMP/WHIP protocols for low-latency streaming. Features streamer dashboards, chat moderation, follower systems, and adaptive bitrate playback. Powered by Next.js 14 and LiveKit for high-performance delivery.',
    technologies: ['Next.js 14', 'TypeScript', 'LiveKit', 'PlanetScale', 'MySQL', 'Tailwind CSS', 'Webhooks'],
    githubUrl: 'https://github.com/darshankalburgi',
    image: '/stream-it.png',
  },
]

const funProjects: Project[] = [
  {
    title: 'Mechanical Keysound',
    description: 'A VS Code extension that brings the satisfying clicky sounds of a mechanical keyboard right into your editor. Features multiple switch profiles (Blue, Brown, Red) and adjustable volume.',
    technologies: ['VS Code API', 'TypeScript', 'Node.js'],
    githubUrl: 'https://github.com/darshankalburgi', // Placeholder for repo
    liveUrl: 'https://marketplace.visualstudio.com/items?itemName=Darshan-kalburgi123.mechanical-keystroke',
    image: '/mechanical-keyboard.png',
  }
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
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
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">My Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink mx-auto rounded-full mb-6" />
          <p className="text-gray-300 text-lg sm:text-xl mt-6 max-w-3xl mx-auto">
            A collection of projects showcasing my skills and experience in <span className="text-neon-cyan font-semibold">full stack development</span>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative preserve-3d"
            >
              {/* Glow effect */}
              {/* Glow effect */}
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500" />

              {/* Card */}
              <div className="relative glass-strong rounded-3xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                {/* Project image */}
                <div className="relative h-48 sm:h-52 bg-gradient-to-br from-neon-cyan/20 via-neon-purple/20 to-neon-pink/20 overflow-hidden">
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent opacity-60" />
                    </>
                  ) : (
                    <>
                      <motion.div
                        animate={{
                          backgroundPosition: ['0%', '100%', '0%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        className="absolute inset-0 opacity-30"
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.4), transparent)',
                          backgroundSize: '200% 100%',
                        }}
                      />
                      <motion.div
                        whileHover={{ scale: 1.3, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <span className="text-6xl font-bold text-gradient opacity-60">
                          {project.title.charAt(0)}
                        </span>
                      </motion.div>
                    </>
                  )}

                  {/* Overlay with links on hover */}
                  <div className="absolute inset-0 bg-dark-bg/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -4 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-4 rounded-full glass-strong border border-neon-cyan/50 hover:border-neon-cyan transition-all"
                      >
                        <FaGithub className="text-2xl text-neon-cyan" />
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -4 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-4 rounded-full glass-strong border border-neon-purple/50 hover:border-neon-purple transition-all"
                      >
                        <FaExternalLinkAlt className="text-2xl text-neon-purple" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 6).map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 rounded-full text-neon-cyan border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="px-3 py-1.5 text-xs font-medium text-gray-500">
                        +{project.technologies.length - 6} more
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, x: 2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-gray-400 hover:text-neon-cyan transition-colors group/link"
                      >
                        <FaGithub className="text-lg" />
                        <span className="text-sm font-medium">View Code</span>
                        <motion.div
                          className="w-0 h-0.5 bg-neon-cyan group-hover/link:w-full transition-all duration-300"
                        />
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, x: 2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-gray-400 hover:text-neon-purple transition-colors group/link"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                        <span className="text-sm font-medium">Live Demo</span>
                        <motion.div
                          className="w-0 h-0.5 bg-neon-purple group-hover/link:w-full transition-all duration-300"
                        />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fun Side Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-32 text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Fun Side Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto rounded-full mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Experimental ideas and cool little tools built just for fun.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-center"
        >
          {funProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative preserve-3d"
            >
              {/* Glow effect - DISTINCT COLOR for fun projects */}
              {/* Glow effect - DISTINCT COLOR for fun projects */}
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple to-neon-pink rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500" />

              {/* Card */}
              <div className="relative glass-strong rounded-3xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                {/* Project image */}
                <div className="relative h-48 sm:h-52 bg-gradient-to-br from-neon-purple/20 via-neon-pink/20 to-orange-500/20 overflow-hidden">
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent opacity-60" />
                    </>
                  ) : (
                    <>
                      <motion.div
                        animate={{
                          backgroundPosition: ['0%', '100%', '0%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        className="absolute inset-0 opacity-30"
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(176, 38, 255, 0.4), transparent)',
                          backgroundSize: '200% 100%',
                        }}
                      />
                      <motion.div
                        whileHover={{ scale: 1.3, rotate: 15 }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <span className="text-6xl font-bold text-gradient opacity-60">
                          ⌨️
                        </span>
                      </motion.div>
                    </>
                  )}

                  {/* Overlay with links on hover */}
                  <div className="absolute inset-0 bg-dark-bg/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -4 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-4 rounded-full glass-strong border border-neon-purple/50 hover:border-neon-purple transition-all"
                      >
                        <FaGithub className="text-2xl text-neon-purple" />
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -4 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-4 rounded-full glass-strong border border-neon-purple/50 hover:border-neon-purple transition-all"
                      >
                        <FaExternalLinkAlt className="text-2xl text-neon-purple" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white group-hover:text-neon-pink transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 6).map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 rounded-full text-neon-pink border border-neon-pink/20 hover:border-neon-pink/50 transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, x: 2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-gray-400 hover:text-neon-pink transition-colors group/link"
                      >
                        <FaGithub className="text-lg" />
                        <span className="text-sm font-medium">View Code</span>
                        <motion.div
                          className="w-0 h-0.5 bg-neon-pink group-hover/link:w-full transition-all duration-300"
                        />
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, x: 2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-gray-400 hover:text-neon-pink transition-colors group/link"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                        <span className="text-sm font-medium">Marketplace</span>
                        <motion.div
                          className="w-0 h-0.5 bg-neon-pink group-hover/link:w-full transition-all duration-300"
                        />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

