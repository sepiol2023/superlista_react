import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: 'superlista_react_final',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  }
})
