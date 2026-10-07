import { ChartColumn, Truck, Handshake, Languages } from 'lucide-react'
import { useLocalized } from '../i18n/useLocalized.js'
import skills, { CEFR_LEVELS } from '../data/skills.js'
import { codeOf } from '../sections.js'
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

// CEFR scale A1 to C2 with the level filled in; native speakers fill the whole scale.
function LanguageList({ items }) {
  const { L } = useLocalized()
  return (
    <ul className="lang-list">
      {items.map((item) => {
        const filled = item.cefr === 'native' ? CEFR_LEVELS.length : CEFR_LEVELS.indexOf(item.cefr) + 1
        return (
          <li className="lang" key={L(item.name)}>
            <div className="lang__head">
              <span className="lang__name">{L(item.name)}</span>
              <span className="lang__detail">{L(item.detail)}</span>
            </div>
            <div className="cefr" role="img" aria-label={`${L(item.name)}: ${L(item.detail)}`}>
              {CEFR_LEVELS.map((lvl, i) => (
                <span key={lvl} className={`cefr__seg${i < filled ? ' is-on' : ''}`}>
                  <span className="cefr__lbl">{lvl}</span>
                </span>
              ))}
            </div>
          </li>
        )
      })}
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
        <SectionHeader code={codeOf('skills')} title={t('sections.skills')} id="skills-title" />
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
