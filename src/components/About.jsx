import { useLocalized } from '../i18n/useLocalized.js'
import profile from '../data/profile.js'
import SectionHeader from './SectionHeader.jsx'
import { numOf } from '../sections.js'

// Wrap the configured key phrases of a sentence so they stand out against lighter body text.
function Emphasised({ text }) {
  const marks = profile.summaryHighlights || []
  const parts = []
  let rest = text
  while (rest) {
    let best = null
    for (const m of marks) {
      const i = rest.indexOf(m.text)
      if (i >= 0 && (!best || i < best.i)) best = { i, m }
    }
    if (!best) { parts.push(rest); break }
    if (best.i > 0) parts.push(rest.slice(0, best.i))
    parts.push(<strong key={parts.length} className={`hl hl--${best.m.tone}`}>{best.m.text}</strong>)
    rest = rest.slice(best.i + best.m.text.length)
  }
  return parts
}

// The CV summary, set as a lead sentence followed by two supporting sentences side by side.
export default function About() {
  const { t, L } = useLocalized()
  const [lead, ...rest] = L(profile.summary).split(/(?<=\.)\s+/)
  return (
    <section className="section section--first" id="about" aria-labelledby="about-title" tabIndex={-1}>
      <div className="section__inner">
        <SectionHeader num={numOf('about')} title={t('sections.about')} id="about-title" />
        <div className="about">
          <p className="about__lead"><Emphasised text={lead} /></p>
          {rest.length > 0 && (
            <div className="about__cols">
              {rest.map((sentence) => <p key={sentence}><Emphasised text={sentence} /></p>)}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
