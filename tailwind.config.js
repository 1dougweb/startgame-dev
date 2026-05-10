/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0b0b0f',
        'void-2': '#111118',
        'void-3': '#16161f',
        neon: {
          DEFAULT: '#7c3aed',
          light: '#9d5cf8',
          dark: '#5b21b6',
          glow: 'rgba(124,58,237,0.35)',
        },
        gold: '#f59e0b',
        'surface-1': 'rgba(255,255,255,0.04)',
        'surface-2': 'rgba(255,255,255,0.07)',
        'border-subtle': 'rgba(255,255,255,0.08)',
        'border-neon': 'rgba(124,58,237,0.4)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237c3aed' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'hero-gradient':
          'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.25) 0%, transparent 70%)',
        'neon-gradient': 'linear-gradient(135deg, #7c3aed 0%, #9d5cf8 50%, #c084fc 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(124,58,237,0.03) 100%)',
      },
      boxShadow: {
        neon: '0 0 20px rgba(124,58,237,0.4), 0 0 60px rgba(124,58,237,0.15)',
        'neon-sm': '0 0 10px rgba(124,58,237,0.3)',
        'neon-lg': '0 0 40px rgba(124,58,237,0.5), 0 0 100px rgba(124,58,237,0.2)',
        glass: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        card: '0 4px 24px rgba(0,0,0,0.3)',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124,58,237,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(124,58,237,0.7), 0 0 80px rgba(124,58,237,0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        countdown: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0.6 },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        countdown: 'countdown 1s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};
