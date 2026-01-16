'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Particles from '@/components/Particles'
import ScrollProgress from '@/components/ScrollProgress'
import ScrollToTop from '@/components/ScrollToTop'
import SectionDivider from '@/components/SectionDivider'
import VisitorCounter from '@/components/VisitorCounter'
// import AutoScrollButton from '@/components/AutoScrollButton'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const SmokeyFluidCursor = dynamic(
  () => import('react-smokey-fluid-cursor').then((mod) => mod.SmokeyFluidCursor),
  { ssr: false }
)

export default function Home() {
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [hasChecked, setHasChecked] = useState(false)

  useEffect(() => {
    // Force scroll to top on refresh
    window.scrollTo(0, 0)

    const checkTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0
      )
      setHasChecked(true)
    }
    checkTouch()
  }, [])

  return (
    <main className="relative min-h-screen bg-black">
      {/* Primary Background Layer: Smokey Fluid Cursor (Desktop Only) */}
      {hasChecked && !isTouchDevice && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <SmokeyFluidCursor
            config={{
              transparent: true,
              densityDissipation: 0.98,
              simResolution: 128,
              dyeResolution: 512,
            }}
          />
        </div>
      )}

      {/* Secondary Background Layer: Particles (Subtle fallback/enhancement for touch) */}
      {isTouchDevice && (
        <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
          <Particles />
        </div>
      )}

      {/* UI Elements */}
      <ScrollProgress />
      <VisitorCounter variant="floating" />
      {/* <AutoScrollButton /> */}
      <Navigation />

      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Contact />
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Footer */}
      <footer className="relative z-10 py-16 mt-20">
        <div className="absolute inset-0 bg-dark-bg/50 backdrop-blur-xl border-t border-white/5" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Branding */}
            <div className="space-y-4">
              <span className="text-3xl font-bold">
                <span className="text-gradient">{'<DK />'}</span>
              </span>
              <p className="text-gray-400 max-w-xs">
                Designing and building high-performance web applications with a focus on user experience and technical excellence.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-white font-bold text-lg">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-neon-cyan transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Counter */}
            <div className="space-y-6">
              <h4 className="text-white font-bold text-lg">Stay Connected</h4>
              <div className="flex flex-col space-y-4">
                <VisitorCounter variant="footer" />
                <div className="pt-4 border-t border-white/5">
                  <p className="text-sm text-gray-500">
                    Built with Next.js, TypeScript & Tailwind CSS
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    © {new Date().getFullYear()} Darshan Kalburgi. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

