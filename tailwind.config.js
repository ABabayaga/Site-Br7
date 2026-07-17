/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        asphalt: {
          DEFAULT: '#0B0C0E',
          light: '#141618',
          surface: '#17191C',
          border: '#26292E',
        },
        chalk: {
          DEFAULT: '#F5F3EE',
          muted: '#9A9CA3',
          faint: '#5C5E64',
        },
        lane: {
          DEFAULT: '#FFC53D',
          dim: '#8A6A1E',
        },
        brake: '#FF5A36',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'lane-dash':
          'repeating-linear-gradient(90deg, #FFC53D 0, #FFC53D 28px, transparent 28px, transparent 52px)',
      },
      keyframes: {
        'lane-move': {
          '0%': { backgroundPositionX: '0' },
          '100%': { backgroundPositionX: '520px' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'lane-move': 'lane-move 14s linear infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
