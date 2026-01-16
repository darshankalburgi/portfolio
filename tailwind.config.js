/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary neon colors - enhanced
        'neon-cyan': '#00f0ff',
        'neon-blue': '#0066ff',
        'neon-purple': '#b026ff',
        'neon-pink': '#ff006e',
        'neon-orange': '#ff6b35',

        // Accent colors
        'accent-teal': '#00d9ff',
        'accent-violet': '#8b5cf6',
        'accent-rose': '#ff0080',

        // Background colors
        'dark-bg': '#000000',
        'dark-card': '#151520',
        'dark-surface': '#1a1a2e',
        'dark-elevated': '#1f1f35',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'gradient-slow': 'gradient 15s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'rotate-slow': 'rotate-slow 20s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00f0ff, 0 0 10px #00f0ff, 0 0 15px #00f0ff' },
          '100%': { boxShadow: '0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 30px #00f0ff' },
        },
        'glow-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(176, 38, 255, 0.3)',
            opacity: '1'
          },
          '50%': {
            boxShadow: '0 0 40px rgba(0, 240, 255, 0.8), 0 0 80px rgba(176, 38, 255, 0.5)',
            opacity: '0.8'
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'radial-gradient(at 40% 20%, hsla(210, 100%, 50%, 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(270, 100%, 50%, 0.3) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(330, 100%, 50%, 0.3) 0px, transparent 50%)',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 240, 255, 0.5)',
        'neon-lg': '0 0 40px rgba(0, 240, 255, 0.6)',
        'neon-purple': '0 0 20px rgba(176, 38, 255, 0.5)',
        'neon-pink': '0 0 20px rgba(255, 0, 110, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 240, 255, 0.1)',
        'elevated': '0 20px 60px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}

