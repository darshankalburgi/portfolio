'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

export default function AutoScrollButton() {
    const [isHolding, setIsHolding] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const scrollRef = useRef<number | null>(null)

    // Detect if we should show the button (only on touch devices)
    useEffect(() => {
        const checkTouch = () => {
            if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
                setIsVisible(true)
            }
        }
        checkTouch()
    }, [])

    const startScrolling = () => {
        setIsHolding(true)
        const scroll = () => {
            window.scrollBy({
                top: 8, // Speed of scrolling
                behavior: 'auto'
            })
            scrollRef.current = requestAnimationFrame(scroll)
        }
        scrollRef.current = requestAnimationFrame(scroll)
    }

    const stopScrolling = () => {
        setIsHolding(false)
        if (scrollRef.current) {
            cancelAnimationFrame(scrollRef.current)
            scrollRef.current = null
        }
    }

    if (!isVisible) return null

    return (
        <div className="fixed bottom-6 left-4 z-[100] md:hidden">
            <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileTap={{ scale: 0.9 }}
                onTouchStart={startScrolling}
                onTouchEnd={stopScrolling}
                onTouchCancel={stopScrolling}
                className={`relative flex flex-col items-center justify-center w-16 h-16 rounded-full glass border transition-all duration-300 ${isHolding ? 'border-neon-cyan shadow-neon-glow-cyan bg-neon-cyan/10' : 'border-white/10'
                    }`}
            >
                <span className="text-[8px] uppercase font-bold text-gray-400 mb-1 tracking-tighter">
                    Hold to
                </span>
                <FaChevronDown className={`text-xl transition-transform duration-300 ${isHolding ? 'text-neon-cyan translate-y-1' : 'text-gray-300'}`} />
                <span className="text-[8px] uppercase font-bold text-gray-400 mt-1 tracking-tighter">
                    Scroll
                </span>

                {/* Pulsing ring when active */}
                <AnimatePresence>
                    {isHolding && (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0.5 }}
                            animate={{ scale: 1.5, opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="absolute inset-0 rounded-full border-2 border-neon-cyan"
                        />
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    )
}
