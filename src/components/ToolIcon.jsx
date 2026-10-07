// Small, recognisable marks for the Data Analytics tool chips.
const icons = {
  sql: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect width="24" height="24" rx="6" fill="#11304D" />
      <ellipse cx="12" cy="7" rx="6" ry="2.4" fill="none" stroke="#2EC4B6" strokeWidth="1.6" />
      <path d="M6 7v10c0 1.3 2.7 2.4 6 2.4s6-1.1 6-2.4V7M6 12c0 1.3 2.7 2.4 6 2.4s6-1.1 6-2.4" fill="none" stroke="#2EC4B6" strokeWidth="1.6" />
    </svg>
  ),
  powerbi: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect width="24" height="24" rx="6" fill="#FFF6D6" />
      <rect x="5" y="12" width="3.6" height="7" rx="1.2" fill="#E8B40C" />
      <rect x="10.2" y="8.5" width="3.6" height="10.5" rx="1.2" fill="#F2C811" />
      <rect x="15.4" y="5" width="3.6" height="14" rx="1.2" fill="#C99A06" />
    </svg>
  ),
  excel: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect width="24" height="24" rx="6" fill="#107C41" />
      <path d="M8 7l8 10M16 7L8 17" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  ),
  python: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect width="24" height="24" rx="6" fill="#EEF3FA" />
      <path d="M11.9 4c-3.1 0-3 1.4-3 1.4v1.9h3.1v.6H7.6S5.5 7.7 5.5 10.9s1.8 3.1 1.8 3.1h1.1v-1.5s-.1-1.8 1.8-1.8h3.1s1.7 0 1.7-1.7V6.1S15.3 4 11.9 4zm-1.7 1.1a.6.6 0 1 1 0 1.1.6.6 0 0 1 0-1.1z" fill="#3776AB" />
      <path d="M12.1 20c3.1 0 3-1.4 3-1.4v-1.9H12v-.6h4.4s2.1.2 2.1-3-1.8-3.1-1.8-3.1h-1.1v1.5s.1 1.8-1.8 1.8h-3.1s-1.7 0-1.7 1.7v2.9S8.7 20 12.1 20zm1.7-1.1a.6.6 0 1 1 0-1.1.6.6 0 0 1 0 1.1z" fill="#F2C811" />
    </svg>
  ),
}

export default function ToolIcon({ name }) {
  return icons[name] ?? null
}
