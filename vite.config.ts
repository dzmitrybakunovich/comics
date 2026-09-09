import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const base = process.env.VITE_BASE_PATH ?? '/'
const srcDir = fileURLToPath(new URL('./src', import.meta.url))

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': srcDir,
      '@utils': path.join(srcDir, 'utils'),
      '@hooks': path.join(srcDir, 'hooks'),
      '@constants': path.join(srcDir, 'constants'),
      '@components': path.join(srcDir, 'components'),
      '@data': path.join(srcDir, 'data'),
    },
  },
})
