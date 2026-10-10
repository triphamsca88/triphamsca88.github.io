import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User site (triphamsca88.github.io) is served from the domain root, so base is '/'.
// Set VITE_BASE=./ to produce a relative build that can be hosted from any sub path.
const base = process.env.VITE_BASE || '/'

// Content hash of the hero image: its URL changes whenever the SVG changes, so browsers never show a stale copy.
const heroVersion = createHash('sha1').update(readFileSync('public/img/hero_supply_chain.svg')).digest('hex').slice(0, 8)
process.env.VITE_HERO_V = heroVersion

export default defineConfig({
  base,
  plugins: [react()],
  css: {
    preprocessorOptions: {
      // Bootstrap 5 Sass still uses @import and global functions; silence those upstream warnings.
      scss: { quietDeps: true, silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'mixed-decls', 'if-function'] },
    },
  },
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
    // Same base for the client and the SSR prerender build (Vite SSR ignores a relative base).
    __ASSET_BASE__: JSON.stringify(base),
    __HERO_V__: JSON.stringify(heroVersion),
  },
})
