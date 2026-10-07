import { useLocalized } from '../i18n/useLocalized.js'
import experience from '../data/experience.js'
import { newestFirst, formatRange } from '../utils/dates.js'
import { numOf } from '../sections.js'
import SectionHeader from './SectionHeader.jsx'
import { TimelineItem, Bullets } from './Timeline.jsx'
import CertificateButton from './CertificateButton.jsx'

export default function Experience() {
  const { t, L, lang } = useLocalized()
  return (
    <section className="section" id="experience" aria-labelledby="experience-title" tabIndex={-1}>
      <div className="section__inner">
        <SectionHeader num={numOf('experience')} title={t('sections.experience')} id="experience-title" />
        <ol className="timeline">
          {/* Featured role first, then newest first */}
          {[...newestFirst(experience)].sort((a, b) => Number(!!b.featured) - Number(!!a.featured)).map((x) => (
            <TimelineItem
              key={x.id}
              featured={x.featured}
              logo={x.logo}
              title={L(x.title)}
              org={x.org}
              location={L(x.location)}
              workType={L(x.workType)}
              date={formatRange(x.start, x.end, lang, t)}
            >
              {x.badge && (
                <p className="badge-live">
                  <span className="badge-live__dot" aria-hidden="true" />
                  {L(x.badge)}
                </p>
              )}
              {x.project && <p className="tl-project">{L(x.project)}</p>}
              <Bullets items={x.bullets.map(L)} />
              {x.certificate && (
                <div className="tl-actions">
                  <CertificateButton
                      image={x.certificate.image}
                      alt={x.certificate.alt}
                      caption={`${L(x.title)}, ${x.org}`}
                      label={L(x.certificate.label)}
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
