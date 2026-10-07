// Resolve a file in public/ against Vite's base, so paths work at '/' (GitHub Pages)
// and with a relative base ('./') when the build is hosted from a sub path.
export function asset(path) {
  if (!path) return ''
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:')) return path
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
