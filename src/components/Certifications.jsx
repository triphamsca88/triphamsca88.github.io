import { useEffect, useMemo, useState } from 'react'
import { ExternalLink, FileText, ZoomIn } from 'lucide-react'
import { useLocalized } from '../i18n/useLocalized.js'
import certificates, { CERT_CATEGORIES } from '../data/certificates.js'
import { newestFirst, formatDate } from '../utils/dates.js'
import { asset } from '../utils/asset.js'
import { numOf } from '../sections.js'
import SectionHeader from './SectionHeader.jsx'
import LogoTile from './LogoTile.jsx'
import { useLightbox } from './Lightbox.jsx'

const FILTER_KEY = 'portfolio.certFilter'

function readFilter() {
  try {
    const v = window.localStorage.getItem(FILTER_KEY)
    return CERT_CATEGORIES.includes(v) ? v : 'all'
  } catch {
    return 'all'
  }
}

function CertCard({ c }) {
  const { t, lang } = useLocalized()
  const openLightbox = useLightbox()
  const open = () => openLightbox({ src: c.image, alt: `${c.name} certificate`, caption: `${c.name}, ${c.issuer}` })
  return (
    <article className="cert-card">
      {c.thumb ? (
        <button type="button" className="cert-thumb" onClick={open} aria-label={`${t('common.openImage')}: ${c.name}`}>
          <img src={asset(c.thumb)} alt="" loading="lazy" decoding="async" />
          <span className="cert-thumb__zoom" aria-hidden="true"><ZoomIn /></span>
        </button>
      ) : (
        <div className="cert-placeholder" aria-hidden="true">
          <LogoTile src={c.logo} name={c.issuer} />
        </div>
      )}
      <div className="cert-body">
        <p className="cert-issuer">
          <LogoTile src={c.logo} name={c.issuer} size="sm" />
          <span>{c.issuer}</span>
        </p>
        <h3 className="cert-name">{c.name}</h3>
        <div className="cert-meta">
          <span>{t('common.issued')} <span className="mono">{formatDate(c.date, lang)}</span></span>
        </div>
        <div className="cert-foot">
          <span className="cert-cat">{t(`filters.${c.category}`)}</span>
          <span className="cert-actions">
            {c.image && (
              <button type="button" className="link-btn" onClick={open}>
                <FileText aria-hidden="true" />{t('common.viewCertificate')}
              </button>
            )}
            {c.verifyUrl && (
              <a className="link-btn" href={c.verifyUrl} target="_blank" rel="noopener noreferrer" aria-label={`${t('common.verify')}: ${c.name}`}>
                <ExternalLink aria-hidden="true" />{t('common.verify')}
              </a>
            )}
          </span>
        </div>
      </div>
    </article>
  )
}

export default function Certifications() {
  const { t } = useLocalized()
  // Start from 'all' (matches the prerendered HTML), then restore the remembered filter.
  const [filter, setFilter] = useState('all')
  useEffect(() => { setFilter(readFilter()) }, [])
  const sorted = useMemo(() => newestFirst(certificates), [])
  const counts = useMemo(() => {
    const c = { all: certificates.length }
    for (const cert of certificates) c[cert.category] = (c[cert.category] || 0) + 1
    return c
  }, [])
  const shown = filter === 'all' ? sorted : sorted.filter((c) => c.category === filter)

  const choose = (key) => {
    setFilter(key)
    try { window.localStorage.setItem(FILTER_KEY, key) } catch { /* not remembered */ }
  }

  return (
    <section className="section" id="certifications" aria-labelledby="certifications-title" tabIndex={-1}>
      <div className="section__inner">
        <SectionHeader num={numOf('certifications')} title={t('sections.certifications')} id="certifications-title" />
        <div className="filters" role="group" aria-label={t('filters.label')}>
          {CERT_CATEGORIES.filter((k) => counts[k]).map((key) => (
            <button key={key} type="button" className="filter-chip" aria-pressed={filter === key} onClick={() => choose(key)}>
              {t(`filters.${key}`)} <span className="filter-chip__count">{counts[key]}</span>
            </button>
          ))}
          <span className="filters__status" aria-live="polite">
            {t('filters.showing', { count: shown.length, total: certificates.length })}
          </span>
        </div>
        <ul className="cert-grid">
          {shown.map((c) => <li key={c.id}><CertCard c={c} /></li>)}
        </ul>
      </div>
    </section>
  )
}
