import { useLocalized } from '../i18n/useLocalized.js'
import skills from '../data/skills.js'
import { codeOf } from '../sections.js'
import SectionHeader from './SectionHeader.jsx'
import ToolIcon from './ToolIcon.jsx'

export default function Skills() {
  const { t, L } = useLocalized()
  return (
    <section className="section" id="skills" aria-labelledby="skills-title" tabIndex={-1}>
      <div className="section__inner">
        <SectionHeader code={codeOf('skills')} title={t('sections.skills')} id="skills-title" />
        <div className="skills">
          {skills.map((group) => (
            <div className="skill-row" key={group.id}>
              <div className="skill-row__label">
                <span className="skill-row__code" aria-hidden="true">{group.code}</span>
                <h3 className="skill-row__title">{L(group.title)}</h3>
              </div>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item.label.en} className={`chip${item.icon ? ' chip--tool' : ''}`}>
                    {item.icon && <ToolIcon name={item.icon} />}
                    {L(item.label)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
