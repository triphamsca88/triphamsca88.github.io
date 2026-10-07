import { ArrowUpRight } from 'lucide-react'
import { useLocalized } from '../i18n/useLocalized.js'
import projects from '../data/projects.js'
import { newestFirst } from '../utils/dates.js'
import { asset } from '../utils/asset.js'
import { codeOf } from '../sections.js'
import SectionHeader from './SectionHeader.jsx'
import { GitHubIcon } from './BrandIcon.jsx'

// Small container drawn in SVG: corrugated walls and door bars, hauled along a dashed lane.
function ContainerBox() {
  return (
    <svg className="transit__box" viewBox="0 0 96 44" aria-hidden="true" focusable="false">
      <rect x="1" y="1" width="94" height="38" rx="3" fill="#11304D" stroke="#2EC4B6" strokeWidth="1.5" />
      {[12, 22, 32, 42, 52, 62].map((x) => (
        <line key={x} x1={x} y1="6" x2={x} y2="34" stroke="#2EC4B6" strokeOpacity="0.45" strokeWidth="1.5" />
      ))}
      <rect x="70" y="6" width="20" height="28" rx="1.5" fill="none" stroke="#F4A259" strokeWidth="1.5" />
      <line x1="80" y1="6" x2="80" y2="34" stroke="#F4A259" strokeWidth="1.5" />
      <circle cx="18" cy="41" r="2.6" fill="#11304D" />
      <circle cx="78" cy="41" r="2.6" fill="#11304D" />
    </svg>
  )
}

function InTransit() {
  const { t } = useLocalized()
  return (
    <div className="transit" role="status">
      <div className="transit__scene" aria-hidden="true">
        <span className="transit__track" />
        <span className="transit__port transit__port--a" />
        <span className="transit__port transit__port--b" />
        <ContainerBox />
      </div>
      <div>
        <span className="transit__status">{t('projects.status')}</span>
        <h3>{t('projects.title')}</h3>
        <p>{t('projects.body')}</p>
      </div>
    </div>
  )
}

function ProjectCard({ p }) {
  const { t, L } = useLocalized()
  return (
    <article className="project-card">
      {p.image && <img src={asset(p.image)} alt={L(p.title)} loading="lazy" decoding="async" />}
      <div className="project-card__body">
        <h3 className="tl-title">{L(p.title)}</h3>
        <dl>
          {p.problem && <><dt>{t('projects.problem')}</dt><dd>{L(p.problem)}</dd></>}
          {p.approach && <><dt>{t('projects.approach')}</dt><dd>{L(p.approach)}</dd></>}
          {p.result && <><dt>{t('projects.result')}</dt><dd>{L(p.result)}</dd></>}
        </dl>
        {p.tools?.length > 0 && (
          <ul className="chips">{p.tools.map((tool) => <li className="chip" key={tool}>{tool}</li>)}</ul>
        )}
        <div className="cert-actions" style={{ marginTop: 'auto' }}>
          {p.github && (
            <a className="btn-outline" href={p.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon /> {t('projects.code')}
            </a>
          )}
          {p.demo && (
            <a className="btn-outline" href={p.demo} target="_blank" rel="noopener noreferrer">
              <ArrowUpRight aria-hidden="true" /> {t('projects.demo')}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const { t } = useLocalized()
  return (
    <section className="section section--alt" id="projects" aria-labelledby="projects-title" tabIndex={-1}>
      <div className="section__inner">
        <SectionHeader code={codeOf('projects')} title={t('sections.projects')} id="projects-title" />
        {projects.length === 0 ? (
          <InTransit />
        ) : (
          <div className="row g-4">
            {newestFirst(projects).map((p) => (
              <div className="col-md-6" key={p.id}><ProjectCard p={p} /></div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
