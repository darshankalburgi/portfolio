import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaSpinner } from 'react-icons/fa'

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError(null)

        try {
            // EmailJS credentials from environment variables
            const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
            const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
            const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

            await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                formRef.current!,
                PUBLIC_KEY
            )

            setIsSubmitted(true)
            formRef.current?.reset()
        } catch (err) {
            console.error('EmailJS Error:', err)
            setError('Failed to send message. Please try again later.')
        } finally {
            setIsSubmitting(false)
            // Reset success state after a few seconds
            setTimeout(() => {
                setIsSubmitted(false)
            }, 5000)
        }
    }

    const contactInfo = [
        {
            icon: FaEnvelope,
            label: 'Email',
            value: 'darshankalburgi6@gmail.com',
            href: 'mailto:darshankalburgi6@gmail.com',
            color: 'from-neon-cyan to-blue-500',
        },
        {
            icon: FaMapMarkerAlt,
            label: 'Location',
            value: 'Karnataka, India',
            color: 'from-neon-purple to-purple-500',
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
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
        <section id="contact" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                        <span className="text-gradient">Get In Touch</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink mx-auto rounded-full mb-6" />
                    <p className="text-gray-300 text-lg sm:text-xl mt-6 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? I'd love to hear from you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Information */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <motion.h3
                            variants={itemVariants}
                            className="text-3xl font-bold text-white mb-6"
                        >
                            Contact Information
                        </motion.h3>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.label}
                                    variants={itemVariants}
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-6 p-6 glass-strong rounded-2xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group"
                                >
                                    <div className={`p-4 rounded-xl bg-gradient-to-br ${info.color} shadow-lg`}>
                                        <info.icon className="text-2xl text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">
                                            {info.label}
                                        </p>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                className="text-lg sm:text-xl text-white hover:text-neon-cyan transition-colors"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-lg sm:text-xl text-white">
                                                {info.value}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Subtle decorative element */}
                        <motion.div
                            variants={itemVariants}
                            className="p-8 glass-strong rounded-3xl border border-white/5 relative overflow-hidden group mt-12"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <p className="text-gray-400 leading-relaxed relative z-10 italic">
                                "Code is like humor. When you have to explain it, it’s bad."
                            </p>
                            <p className="text-neon-cyan font-medium mt-4 relative z-10">— Cory House</p>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="glass-strong rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/10 blur-[80px] -mr-16 -mt-16" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon-purple/10 blur-[80px] -ml-16 -mb-16" />

                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 relative z-10"
                            >
                                <div className="p-4 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan">
                                    <FaCheckCircle className="text-6xl" />
                                </div>
                                <h3 className="text-3xl font-bold text-white">Message Sent!</h3>
                                <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsSubmitted(false)}
                                    className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-all"
                                >
                                    Send another message
                                </motion.button>
                            </motion.div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                {error && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-center text-sm"
                                    >
                                        {error}
                                    </motion.div>
                                )}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">
                                            Your Name
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            id="name"
                                            name="from_name"
                                            placeholder="John Doe"
                                            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/30 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">
                                            Your Email
                                        </label>
                                        <input
                                            required
                                            type="email"
                                            id="email"
                                            name="reply_to"
                                            placeholder="john@example.com"
                                            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-neon-purple/50 focus:ring-1 focus:ring-neon-purple/30 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-gray-400 ml-1">
                                        Subject
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="Inquiry about collaboration"
                                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-neon-pink/50 focus:ring-1 focus:ring-neon-pink/30 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">
                                        Message
                                    </label>
                                    <textarea
                                        required
                                        id="message"
                                        name="message"
                                        rows={5}
                                        placeholder="Tell me more about your project..."
                                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/30 transition-all resize-none"
                                    />
                                </div>

                                <motion.button
                                    whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="w-full py-4 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink rounded-xl text-white font-bold text-lg shadow-neon hover:shadow-neon-lg transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span>Sending...</span>
                                            <FaSpinner className="animate-spin" />
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
