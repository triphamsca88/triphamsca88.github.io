import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight, Award, Check, ChevronLeft, ChevronRight, Maximize2, Play, X } from 'lucide-react'
import { useLocalized } from '../i18n/useLocalized.js'
import projects from '../data/projects.js'
import { newestFirst } from '../utils/dates.js'
import { asset } from '../utils/asset.js'
import { numOf } from '../sections.js'
import SectionHeader from './SectionHeader.jsx'
import { GitHubIcon } from './BrandIcon.jsx'
import CertificateButton from './CertificateButton.jsx'
import { useLightbox } from './Lightbox.jsx'

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

const pad = (n) => String(n).padStart(2, '0')

// Media viewer: one stage (image or video) with a caption, previous and next controls and a thumbnail strip.
function MediaViewer({ items, title }) {
  const { t } = useLocalized()
  const openLightbox = useLightbox()
  const [index, setIndex] = useState(0)
  const stripRef = useRef(null)
  const item = items[index]
  const go = (next) => {
    const i = (next + items.length) % items.length
    setIndex(i)
    stripRef.current?.children[i]?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' })
  }

  return (
    <div className="viewer" role="group" aria-label={`${t('projects.gallery')}: ${title}`}>
      <div className="viewer__stage">
        {item.type === 'video' ? (
          <video key={item.src} className="viewer__video" controls preload="none" playsInline
            poster={asset(item.poster)} aria-label={item.alt}>
            <source src={asset(item.src)} type="video/mp4" />
          </video>
        ) : (
          <button type="button" className="viewer__zoom" aria-label={`${t('projects.openImage')}: ${item.alt}`}
            onClick={() => openLightbox({ src: item.src, alt: item.alt, caption: item.caption })}>
            <img key={item.src} src={asset(item.src)} alt={item.alt} loading="lazy" decoding="async" />
            <span className="viewer__zoom-hint" aria-hidden="true"><Maximize2 /></span>
          </button>
        )}
        <button type="button" className="viewer__nav viewer__nav--prev" onClick={() => go(index - 1)} aria-label={t('projects.prev')}>
          <ChevronLeft aria-hidden="true" />
        </button>
        <button type="button" className="viewer__nav viewer__nav--next" onClick={() => go(index + 1)} aria-label={t('projects.next')}>
          <ChevronRight aria-hidden="true" />
        </button>
      </div>

      <div className="viewer__caption" aria-live="polite">
        <span className="viewer__count">{pad(index + 1)} / {pad(items.length)}</span>
        <p>{item.caption}</p>
      </div>

      <ol className="viewer__strip" ref={stripRef}>
        {items.map((m, i) => (
          <li key={m.src}>
            <button type="button" className="viewer__thumb" aria-current={i === index ? 'true' : undefined}
              aria-label={`${pad(i + 1)}: ${m.caption}`} onClick={() => go(i)}>
              <img src={asset(m.thumb)} alt="" loading="lazy" decoding="async" />
              {m.type === 'video' && (
                <span className="viewer__play" aria-hidden="true"><Play />{m.duration}</span>
              )}
            </button>
          </li>
        ))}
      </ol>
      <p className="viewer__hint">{t('projects.viewerHint')}</p>
    </div>
  )
}

function CaseStudy({ p }) {
  const { t, L } = useLocalized()
  return (
    <article className="case" aria-labelledby={`${p.id}-title`}>
      <header className="case__head">
        <h3 className="case__title" id={`${p.id}-title`}>{L(p.title)}</h3>
        <p className="case__topic">{L(p.topic)}</p>
        <div className="case__meta">
          {p.award && <span className="rank-badge"><Award aria-hidden="true" />{L(p.award)}</span>}
          {p.tags?.length > 0 && (
            <ul className="case__tags">{p.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
          )}
        </div>
      </header>

      <div className="case__grid">
        <div className="case__media">
          <MediaViewer items={p.media} title={L(p.title)} />
        </div>

        <div className="case__text">
          <section className="case__block">
            <h4 className="case__h">{t('projects.overview')}</h4>
            <p>{L(p.overview)}</p>
          </section>
          <section className="case__block">
            <h4 className="case__h">{t('projects.problem')}</h4>
            <p>{L(p.problem)}</p>
          </section>
          <section className="case__block case__role">
            <h4 className="case__h">{t('projects.role')}</h4>
            <ul>{p.role.map((r) => <li key={L(r)}>{L(r)}</li>)}</ul>
          </section>
        </div>
      </div>

      {p.pipeline?.length > 0 && (
        <section className="case__block case__pipeline">
          <h4 className="case__h">{t('projects.how')}</h4>
          <ol className="pipe">
            {p.pipeline.map((s, i) => (
              <li className="pipe__stop" key={s.code}>
                <span className="pipe__node" aria-hidden="true" />
                <span className="pipe__code">{pad(i + 1)} · {s.code}</span>
                <span className="pipe__title">{L(s.title)}</span>
                <span className="pipe__detail">{L(s.detail)}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      <div className="case__foot">
        <section className="case__block">
          <h4 className="case__h">{t('projects.results')}</h4>
          <ul className="case__results">
            {p.results.map((r) => <li key={L(r)}><Check aria-hidden="true" />{L(r)}</li>)}
          </ul>
        </section>
        <section className="case__block">
          <h4 className="case__h">{t('projects.tools')}</h4>
          <ul className="chips">{p.tools.map((tool) => <li className="chip" key={tool}>{tool}</li>)}</ul>
          <div className="case__actions">
            {p.github && (
              <a className="btn-outline" href={p.github} target="_blank" rel="noopener noreferrer">
                <GitHubIcon /> {t('projects.code')}
              </a>
            )}
            {p.certificate && (
              <CertificateButton image={p.certificate.image} alt={p.certificate.alt} caption={p.certificate.caption}
                label={t('projects.certificate')} />
            )}
          </div>
        </section>
      </div>
    </article>
  )
}

// Compact card in the Projects grid; the full case study opens in a dialog.
function ProjectCard({ p, onOpen }) {
  const { t, L } = useLocalized()
  const images = (p.cardImages || []).slice(0, 3)
  return (
    <article className="pcard" aria-labelledby={`${p.id}-card-title`}>
      {images.length > 0 && (
        <button type="button" className="pcard__media" onClick={onOpen} tabIndex={-1} aria-hidden="true">
          {images.map((src) => <img key={src} src={asset(src)} alt="" loading="lazy" decoding="async" />)}
        </button>
      )}
      <div className="pcard__body">
        <p className="pcard__cat">{p.category}</p>
        <h3 className="pcard__title" id={`${p.id}-card-title`}>{L(p.title)}</h3>
        <p className="pcard__role">{L(p.roleLine)}</p>
        <p className="pcard__summary">{L(p.summary)}</p>
        {p.highlights?.length > 0 && (
          <p className="pcard__kpis">{p.highlights.map(L).join('\u00a0· ')}</p>
        )}
        <button type="button" className="pcard__open" onClick={onOpen} aria-haspopup="dialog">
          {t('projects.open')} <ArrowRight aria-hidden="true" />
        </button>
      </div>
    </article>
  )
}

// Grid filler shown while the number of projects is odd: the next case study is still on its way.
function NextInTransit() {
  const { t } = useLocalized()
  return (
    <div className="pcard pcard--transit" aria-hidden="true">
      <div className="transit__scene">
        <span className="transit__track" />
        <span className="transit__port transit__port--a" />
        <span className="transit__port transit__port--b" />
        <ContainerBox />
      </div>
      <span className="transit__status">{t('projects.status')}</span>
      <p className="pcard__transit-text">{t('projects.upcoming')}</p>
    </div>
  )
}

function CaseDialog({ p, onClose }) {
  const { t, L } = useLocalized()
  const panelRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    const previous = document.activeElement
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e) => {
      if (document.querySelector('.lightbox')) return // the image viewer on top handles its own keys
      if (e.key === 'Escape') { e.preventDefault(); onClose(); return }
      if (e.key !== 'Tab') return
      const focusable = panelRef.current?.querySelectorAll('button, [href], video, [tabindex]:not([tabindex="-1"])')
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      previous?.focus?.()
    }
  }, [onClose])

  return (
    <div className="case-modal" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="case-modal__panel" role="dialog" aria-modal="true" aria-label={L(p.title)} ref={panelRef}>
        <div className="case-modal__bar">
          <span className="case-modal__label">{p.category}</span>
          <button type="button" className="case-modal__close" onClick={onClose} ref={closeRef} aria-label={t('common.close')}>
            <X aria-hidden="true" />
          </button>
        </div>
        <CaseStudy p={p} />
      </div>
    </div>
  )
}

export default function Projects() {
  const { t } = useLocalized()
  const [openId, setOpenId] = useState(null)
  const close = useCallback(() => setOpenId(null), [])
  const list = newestFirst(projects)
  const open = list.find((p) => p.id === openId)
  return (
    <section className="section section--alt" id="projects" aria-labelledby="projects-title" tabIndex={-1}>
      <div className="section__inner">
        <SectionHeader num={numOf('projects')} title={t('sections.projects')} id="projects-title" />
        {list.length === 0 ? (
          <InTransit />
        ) : (
          <div className="pgrid">
            {list.map((p) => <ProjectCard key={p.id} p={p} onOpen={() => setOpenId(p.id)} />)}
            {list.length % 2 === 1 && <NextInTransit />}
          </div>
        )}
      </div>
      {open && <CaseDialog p={open} onClose={close} />}
    </section>
  )
}
