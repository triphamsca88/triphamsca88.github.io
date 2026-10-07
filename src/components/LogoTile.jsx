import { asset } from '../utils/asset.js'

function initialsOf(name = '') {
  const words = name.replace(/\(.*?\)/g, '').split(/\s+/).filter(Boolean)
  return words.slice(0, 2).map((w) => w[0]).join('').toUpperCase()
}

// Organisation logo; falls back to initials when no logo file exists yet.
export default function LogoTile({ src, name, size }) {
  const cls = `logo-tile${size === 'sm' ? ' logo-tile--sm' : ''}`
  if (!src) {
    return <span className={`${cls} logo-tile--initials`} aria-hidden="true">{initialsOf(name)}</span>
  }
  return (
    <span className={cls}>
      <img src={asset(src)} alt={`${name} logo`} loading="lazy" decoding="async" />
    </span>
  )
}
