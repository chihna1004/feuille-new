import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        tablet: { max: '900px' },
        mobile: { max: '640px' },
      },
      colors: {
        bg:       '#faf8f4',
        'bg-alt': '#f3efe8',
        greige:   '#b8a899',
        sage:     '#8a9b8c',
        brown:    '#2c2218',
        'brown-md': '#5c4f42',
        line:     '#ddd5ca',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:  ['var(--font-jost)', 'sans-serif'],
      },
      borderRadius: {
        pill: '32px',
      },
      boxShadow: {
        card: '0 8px 40px rgba(80,60,40,0.07)',
        nav:  '0 1px 0 #ddd5ca',
      },
    },
  },
  plugins: [],
}

export default config
