/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
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
          DEFAULT: '#E0176A',
          dim: '#7A0C3A',
        },
        // Inverted counterpart to `chalk` — text tones for sections that sit on a light background
        ink: {
          DEFAULT: '#111316',
          muted: '#3F4247',
          faint: '#8A8D93',
        },
        brake: '#FF5A36',
      },
      fontFamily: {
        // Neo-grotesca Black do referencial (equivalente livre da Helvetica Now Display Black)
        display: ['"Archivo"', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'lane-dash':
          'repeating-linear-gradient(90deg, #E0176A 0, #E0176A 28px, transparent 28px, transparent 52px)',
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
        'stroke-shimmer': {
          '0%': { WebkitMaskPositionX: '0%', maskPositionX: '0%' },
          '100%': { WebkitMaskPositionX: '-250%', maskPositionX: '-250%' },
        },
      },
      animation: {
        'lane-move': 'lane-move 14s linear infinite',
        marquee: 'marquee 28s linear infinite',
        'stroke-shimmer': 'stroke-shimmer 3.2s linear infinite',
      },
    },
  },
  plugins: [],
}
