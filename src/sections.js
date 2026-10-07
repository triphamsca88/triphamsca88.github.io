// Section order, anchors and the two digit number shown beside each heading.
export const SECTIONS = [
  { id: 'about', num: '01' },
  { id: 'education', num: '02' },
  { id: 'experience', num: '03' },
  { id: 'leadership', num: '04' },
  { id: 'skills', num: '05' },
  { id: 'projects', num: '06' },
  { id: 'certifications', num: '07' },
  { id: 'awards', num: '08' },
]

export const SECTION_IDS = SECTIONS.map((s) => s.id)

export function numOf(id) {
  return SECTIONS.find((s) => s.id === id)?.num ?? ''
}

// Smooth scroll that also works inside sandboxed frames where hash navigation may be restricted.
export function scrollToSection(id, reduced) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
  el.focus?.({ preventScroll: true })
}
