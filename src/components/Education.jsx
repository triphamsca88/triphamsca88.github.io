import { useLocalized } from '../i18n/useLocalized.js'
import education from '../data/education.js'
import { newestFirst, formatRange } from '../utils/dates.js'
import { codeOf } from '../sections.js'
import SectionHeader from './SectionHeader.jsx'
import { TimelineItem, Bullets } from './Timeline.jsx'
import CertificateButton from './CertificateButton.jsx'

export default function Education() {
  const { t, L, lang } = useLocalized()
  return (
    <section className="section section--sand" id="education" aria-labelledby="education-title" tabIndex={-1}>
      <div className="section__inner">
        <SectionHeader code={codeOf('education')} title={t('sections.education')} id="education-title" />
        <ol className="timeline">
          {newestFirst(education).map((e) => (
            <TimelineItem
              key={e.id}
              logo={e.logo}
              title={L(e.title)}
              org={e.org}
              location={L(e.location)}
              date={formatRange(e.start, e.end, lang, t)}
            >
              {e.subtitle && <p className="tl-sub">{L(e.subtitle)}</p>}
              {e.highlight && (
                <p className="tl-highlight">
                  <span>{e.highlight.label}</span>
                  <span className="mono">{e.highlight.value}</span>
                </p>
              )}
              <Bullets items={e.bullets.map(L)} />
              {e.certificate && (
                <div className="tl-actions">
                  <CertificateButton
                    image={e.certificate.image}
                    alt={e.certificate.alt}
                    caption={`${L(e.title)}, ${e.org}`}
                    label={L(e.certificate.label)}
                  />
                </div>
              )}
            </TimelineItem>
          ))}
        </ol>
      </div>
    </section>
  )
}
