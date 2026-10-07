import { ChartColumn, Truck, Handshake, Languages } from 'lucide-react'
import { useLocalized } from '../i18n/useLocalized.js'
import skills from '../data/skills.js'
import { numOf } from '../sections.js'
import SectionHeader from './SectionHeader.jsx'
import ToolIcon from './ToolIcon.jsx'

const GROUP_ICONS = { data: ChartColumn, supply: Truck, soft: Handshake, languages: Languages }

function ToolGrid({ items }) {
  const { L } = useLocalized()
  return (
    <ul className="tool-grid">
      {items.map((item) => (
        <li className="tool" key={L(item.name)}>
          <ToolIcon name={item.icon} />
          <span className="tool__text">
            <span className="tool__name">{L(item.name)}</span>
            {item.detail && <span className="tool__detail">{L(item.detail)}</span>}
          </span>
        </li>
      ))}
    </ul>
  )
}

// Language level: CEFR badge, IELTS overall band and the four skill bands (out of 9).
function LanguageList({ items }) {
  const { t, L } = useLocalized()
  return (
    <ul className="lang-list">
      {items.map((item) => (
        <li className="lang" key={L(item.name)}>
          <div className="lang__top">
            <div className="lang__id">
              <span className="lang__name">{L(item.name)}</span>
              <span className="lang__cefr">CEFR {item.cefr}</span>
            </div>
            <div className="lang__overall">
              <span className="lang__score">{item.overall.toFixed(1)}</span>
              <span className="lang__of">{t('skills.overall', { test: item.test })}</span>
            </div>
          </div>
          <ul className="bands">
            {item.bands.map((b) => (
              <li className="band" key={b.label}>
                <span className="band__label">{b.label}</span>
                <span className="band__bar" role="img" aria-label={`${b.label} ${b.score} of 9`}>
                  <span style={{ width: `${(b.score / 9) * 100}%` }} />
                </span>
                <span className="band__score">{b.score.toFixed(1)}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

function Chips({ items }) {
  const { L } = useLocalized()
  return (
    <ul className="chips">
      {items.map((item) => <li className="chip" key={item.label.en}>{L(item.label)}</li>)}
    </ul>
  )
}

export default function Skills() {
  const { t, L } = useLocalized()
  return (
    <section className="section" id="skills" aria-labelledby="skills-title" tabIndex={-1}>
      <div className="section__inner">
        <SectionHeader num={numOf('skills')} title={t('sections.skills')} id="skills-title" />
        <div className="skill-grid">
          {skills.map((group) => {
            const Icon = GROUP_ICONS[group.icon]
            const countKey = group.layout === 'tools' ? 'skills.tools' : group.layout === 'languages' ? 'skills.languages' : 'skills.count'
            return (
              <article className={`skill-card skill-card--${group.id}`} key={group.id}>
                <header className="skill-card__head">
                  <span className="skill-card__icon" aria-hidden="true">{Icon && <Icon />}</span>
                  <div>
                    <h3 className="skill-card__title">{L(group.title)}</h3>
                    <p className="skill-card__count">{t(countKey, { count: group.items.length })}</p>
                  </div>
                </header>
                {group.layout === 'tools' && <ToolGrid items={group.items} />}
                {group.layout === 'languages' && <LanguageList items={group.items} />}
                {!group.layout && <Chips items={group.items} />}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
