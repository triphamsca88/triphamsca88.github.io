import { useLocalized } from '../i18n/useLocalized.js'
import skills from '../data/skills.js'
import { asset } from '../utils/asset.js'
import { numOf } from '../sections.js'
import SectionHeader from './SectionHeader.jsx'

function ToolList({ items }) {
  const { L } = useLocalized()
  return (
    <ul className="tool-list">
      {items.map((item) => (
        <li className="tool" key={L(item.name)}>
          <img src={asset(item.logo)} alt="" width="32" height="32" loading="lazy" decoding="async" />
          <span className="tool__name">{L(item.name)}</span>
          {item.detail && <span className="tool__detail">{L(item.detail)}</span>}
        </li>
      ))}
    </ul>
  )
}

// English: IELTS overall band beside the test name, then the four skill bands (out of 9).
function LanguageBlock({ items }) {
  const { t, L } = useLocalized()
  return items.map((item) => (
    <div className="lang" key={L(item.name)}>
      <span className="lang__name">{L(item.name)}</span>
      <div className="lang__overall">
        <span className="lang__score">{item.overall.toFixed(1)}</span>
        <span className="lang__test">
          <strong>{item.test}</strong>
          <span>{t('skills.overall')}</span>
        </span>
      </div>
      <ul className="bands" aria-label={t('skills.bands', { test: item.test })}>
        {item.bands.map((b) => (
          <li className="band" key={b.label}>
            <span className="band__score">{b.score.toFixed(1)}</span>
            <span className="band__label">{b.label}</span>
          </li>
        ))}
      </ul>
    </div>
  ))
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
        <div className="skills-panel">
          {skills.map((group) => (
            <section className={`skill-block skill-block--${group.id}`} key={group.id} aria-labelledby={`skill-${group.id}`}>
              <h3 className="skill-block__title" id={`skill-${group.id}`}>{L(group.title)}</h3>
              {group.layout === 'tools' && <ToolList items={group.items} />}
              {group.layout === 'languages' && <LanguageBlock items={group.items} />}
              {!group.layout && <Chips items={group.items} />}
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
