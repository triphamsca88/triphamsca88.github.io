// Section order, anchors and shipment style codes shown above each heading.
export const SECTIONS = [
  { id: 'about', code: '01 · ABOUT' },
  { id: 'education', code: '02 · EDUCATION' },
  { id: 'experience', code: '03 · EXPERIENCE' },
  { id: 'leadership', code: '04 · LEADERSHIP & ACTIVITIES' },
  { id: 'skills', code: '05 · SKILLS' },
  { id: 'projects', code: '06 · PROJECTS' },
  { id: 'certifications', code: '07 · CERTIFICATIONS' },
  { id: 'awards', code: '08 · HONORS & AWARDS' },
]

export const SECTION_IDS = SECTIONS.map((s) => s.id)

export function codeOf(id) {
  return SECTIONS.find((s) => s.id === id)?.code ?? ''
}

// Smooth scroll that also works inside sandboxed frames where hash navigation may be restricted.
export function scrollToSection(id, reduced) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
  el.focus?.({ preventScroll: true })
}
