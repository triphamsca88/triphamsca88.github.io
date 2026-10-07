import { useLocalized } from '../i18n/useLocalized.js'
import leadership from '../data/leadership.js'
import { newestFirst, formatRange } from '../utils/dates.js'
import { codeOf } from '../sections.js'
import SectionHeader from './SectionHeader.jsx'
import { TimelineItem } from './Timeline.jsx'

// Organisation level start/end derived from its roles so grouped entries sort correctly.
function withSpan(org) {
  const starts = org.roles.map((r) => r.start).filter(Boolean).sort()
  const ends = org.roles.map((r) => r.end).filter(Boolean).sort()
  return { ...org, start: starts[0] || '', end: ends[ends.length - 1] || '' }
}

export default function Leadership() {
  const { t, L, lang } = useLocalized()
  const orgs = newestFirst(leadership.map(withSpan))
  return (
    <section className="section section--alt" id="leadership" aria-labelledby="leadership-title" tabIndex={-1}>
      <div className="section__inner">
        <SectionHeader code={codeOf('leadership')} title={t('sections.leadership')} id="leadership-title" />
        <ol className="timeline">
          {orgs.map((o) => {
            const range = formatRange(o.start, o.end, lang, t)
            if (o.roles.length === 1) {
              const r = o.roles[0]
              return (
                <TimelineItem key={o.id} logo={o.logo} logoName={o.org} title={L(r.title)} org={o.org}
                  workType={L(r.workType)} date={range}>
                  {r.context && <p className="tl-sub">{L(r.context)}</p>}
                  <ul className="bullets"><li>{L(r.description)}</li></ul>
                </TimelineItem>
              )
            }
            // Several roles: grouped under one organisation, the way LinkedIn shows them.
            return (
              <TimelineItem key={o.id} logo={o.logo} logoName={o.org} title={o.org}
                workType={t('common.roles', { count: o.roles.length })} date={range}>
                <ol className="roles">
                  {o.roles.map((r, i) => (
                    <li className="role" key={i}>
                      <div className="role__head">
                        <div>
                          <h4 className="role__title">{L(r.title)}</h4>
                          {(r.context || r.workType) && (
                            <p className="role__ctx">{[L(r.context), L(r.workType)].filter(Boolean).join(' · ')}</p>
                          )}
                        </div>
                        <span className="role__date">{formatRange(r.start, r.end, lang, t)}</span>
                      </div>
                      <p>{L(r.description)}</p>
                    </li>
                  ))}
                </ol>
              </TimelineItem>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
