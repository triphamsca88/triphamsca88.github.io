import { useLocalized } from '../i18n/useLocalized.js'
import profile from '../data/profile.js'
import SectionHeader from './SectionHeader.jsx'
import { numOf } from '../sections.js'

// The CV summary, set as a lead sentence followed by two supporting sentences side by side.
export default function About() {
  const { t, L } = useLocalized()
  const [lead, ...rest] = L(profile.summary).split(/(?<=\.)\s+/)
  return (
    <section className="section section--first" id="about" aria-labelledby="about-title" tabIndex={-1}>
      <div className="section__inner">
        <SectionHeader num={numOf('about')} title={t('sections.about')} id="about-title" />
        <div className="about">
          <p className="about__lead">{lead}</p>
          {rest.length > 0 && (
            <div className="about__cols">
              {rest.map((sentence) => <p key={sentence}>{sentence}</p>)}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
