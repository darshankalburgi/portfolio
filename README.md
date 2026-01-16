# Futuristic Portfolio

A modern, futuristic portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- ✨ **Futuristic Design**: Glassmorphism effects, neon accents, and smooth animations
- 🎨 **Beautiful UI**: Gradient backgrounds, particle effects, and interactive elements
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Performance**: Optimized for speed and SEO
- 🎭 **Animations**: Smooth animations powered by Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Your Information

1. **Hero Section** (`components/Hero.tsx`):
   - Change "Your Name" to your actual name
   - Update the description
   - Update social media links (GitHub, LinkedIn, Email)

2. **About Section** (`components/About.tsx`):
   - Update the about text
   - Modify skills and technologies to match your expertise

3. **Projects Section** (`components/Projects.tsx`):
   - Update the `projects` array with your actual projects
   - Add/remove projects as needed
   - Update GitHub and live URLs

### Styling

The portfolio uses Tailwind CSS with custom colors defined in `tailwind.config.js`. You can customize:
- Colors: `neon-cyan`, `neon-purple`, `neon-pink`
- Animations: Modify keyframes in `tailwind.config.js`
- Global styles: Edit `app/globals.css`

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This portfolio can be easily deployed on:
- [Vercel](https://vercel.com) (recommended for Next.js)
- [Netlify](https://netlify.com)
- Any platform that supports Next.js

## Technologies Used

- **Next.js 14**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS
- **Framer Motion**: Animation library
- **React Icons**: Icon library

## License

MIT License - feel free to use this portfolio for your own projects!

