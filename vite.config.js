import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User site (triphamsca88.github.io) is served from the domain root, so base is '/'.
// Set VITE_BASE=./ to produce a relative build that can be hosted from any sub path.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
})
