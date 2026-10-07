// Resolve a file in public/ against Vite's base, so paths work at '/' (GitHub Pages)
// and with a relative base ('./') when the build is hosted from a sub path.
/* global __ASSET_BASE__ */
const BASE = typeof __ASSET_BASE__ === 'string' ? __ASSET_BASE__ : import.meta.env.BASE_URL

export function asset(path) {
  if (!path) return ''
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:')) return path
  return BASE + path.replace(/^\//, '')
}
