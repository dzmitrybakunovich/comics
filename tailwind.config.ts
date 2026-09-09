import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0c12',
        paper: '#ece4d2',
        ember: '#f5ba4f',
      },
    },
  },
} satisfies Config
