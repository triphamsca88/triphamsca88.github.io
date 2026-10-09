import { Award } from 'lucide-react'
import { useLocalized } from '../i18n/useLocalized.js'
import awards from '../data/awards.js'
import { newestFirst, formatDate } from '../utils/dates.js'
import { asset } from '../utils/asset.js'
import { numOf } from '../sections.js'
import SectionHeader from './SectionHeader.jsx'
import LogoTile from './LogoTile.jsx'
import CertificateButton from './CertificateButton.jsx'
import { useLightbox } from './Lightbox.jsx'

function AwardRow({ a }) {
  const { t, L, lang } = useLocalized()
  const openLightbox = useLightbox()
  const caption = `${L(a.rank)}, ${a.title}`
  return (
    <li className="award">
      <div className="award__rank">
        <span className="rank-badge"><Award aria-hidden="true" />{L(a.rank)}</span>
        <span className="award__date">{formatDate(a.date, lang)}</span>
      </div>
      <div className="award__body">
        <h3 className="award__title">{a.title}</h3>
        {a.theme && <p className="award__theme">{L(a.theme)}</p>}
        <p className="award__org">
          <LogoTile src={a.logo} name={a.org} size={a.logoWide ? 'wide' : 'sm'} />
          <span>{a.org}</span>
        </p>
        <p className="award__desc">{L(a.description)}</p>
      </div>
      {a.thumb && (
        <div className="award__media">
          <button type="button" className="award__thumb" aria-label={`${t('common.openImage')}: ${a.title}`}
            onClick={() => openLightbox({ src: a.image, alt: a.alt, caption })}>
            <img src={asset(a.thumb)} alt="" loading="lazy" decoding="async" />
          </button>
          <CertificateButton image={a.image} alt={a.alt} caption={caption} />
        </div>
      )}
    </li>
  )
}

export default function Awards() {
  const { t } = useLocalized()
  return (
    <section className="section section--alt" id="awards" aria-labelledby="awards-title" tabIndex={-1}>
      <div className="section__inner">
        <SectionHeader num={numOf('awards')} title={t('sections.awards')} id="awards-title" />
        <ol className="awards">
          {newestFirst(awards).map((a) => <AwardRow key={a.id} a={a} />)}
        </ol>
      </div>
    </section>
  )
}
