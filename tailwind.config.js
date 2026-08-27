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
          // 4.7:1 sobre `asphalt` — o tom anterior (#5C5E64) ficava em 3.0:1 e
          // reprovava no contraste AA para os labels em mono/11px.
          faint: '#7A7D85',
        },
        lane: {
          DEFAULT: '#E0176A',
          dim: '#7A0C3A',
          // Variantes de contraste do rosa de marca — o DEFAULT só passa em AA
          // para texto grande. Use `deep` para preenchimento/texto pequeno em
          // fundo claro (5.4:1 com `chalk` por cima) e `bright` para texto
          // pequeno em fundo escuro (5.8:1 sobre `asphalt`).
          deep: '#C2125A',
          bright: '#FF3D82',
        },
        // Inverted counterpart to `chalk` — text tones for sections that sit on a light background
        ink: {
          DEFAULT: '#111316',
          muted: '#3F4247',
          // 4.7:1 sobre `chalk` — antes #8A8D93, que ficava em 3.0:1.
          faint: '#6A6D73',
        },
        brake: '#FF5A36',
      },
      fontFamily: {
        // Neo-grotesca Black do referencial (equivalente livre da Helvetica Now Display Black)
        display: ['"Archivo"', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        // Grotesca ligeiramente condensada usada nas seções claras (piloto Hero/Header) —
        // referência visual: specia1ne.com
        tight: ['"Inter Tight"', '"Inter"', 'Helvetica Neue', 'Arial', 'sans-serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        // Serifada editorial do referencial — arquivos em public/fonts/ (ver index.css)
        editorial: ['"PP Editorial New"', '"Playfair Display"', 'Georgia', 'serif'],
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
