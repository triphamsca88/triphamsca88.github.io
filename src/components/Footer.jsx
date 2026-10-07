import { ArrowUp } from 'lucide-react'
import { useLocalized } from '../i18n/useLocalized.js'
import profile from '../data/profile.js'
import { formatDate } from '../utils/dates.js'
import ContactIcons from './ContactIcons.jsx'

/* global __BUILD_TIME__ */
const BUILD_TIME = typeof __BUILD_TIME__ === 'string' ? __BUILD_TIME__ : new Date().toISOString()

export default function Footer() {
  const { t, lang } = useLocalized()
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__meta">
          <span>© {year} <strong>{profile.name}</strong>. {t('footer.rights')}</span>
          <span className="footer__updated">{t('footer.updated')}: {formatDate(BUILD_TIME.slice(0, 10), lang)}</span>
        </div>
        <div className="footer__right">
          <ContactIcons />
          <button type="button" className="icon-btn" aria-label={t('footer.backToTop')} title={t('footer.backToTop')}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <ArrowUp aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}
