import { useState } from 'react'
import { ArrowUp, Check, Copy } from 'lucide-react'
import { useLocalized } from '../i18n/useLocalized.js'
import profile from '../data/profile.js'
import { formatDate } from '../utils/dates.js'
import ContactIcons from './ContactIcons.jsx'
import CvButton from './CvButton.jsx'

/* global __BUILD_TIME__ */
const BUILD_TIME = typeof __BUILD_TIME__ === 'string' ? __BUILD_TIME__ : new Date().toISOString()

// Email shown as selectable text (mailto links do not open everywhere), with a copy button.
function FooterEmail() {
  const { t } = useLocalized()
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      const range = document.createRange()
      range.selectNodeContents(document.getElementById('footer-email'))
      const sel = window.getSelection()
      sel.removeAllRanges()
      sel.addRange(range)
    }
  }
  return (
    <span className="footer__email">
      <a href={`mailto:${profile.email}`} id="footer-email">{profile.email}</a>
      <button type="button" className="footer__copy" onClick={copy} aria-label={t('contact.copy')}>
        {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
        <span aria-live="polite">{copied ? t('contact.copied') : t('contact.copyShort')}</span>
      </button>
    </span>
  )
}

export default function Footer() {
  const { t, lang } = useLocalized()
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__meta">
          <FooterEmail />
          <span suppressHydrationWarning>© {year} <strong>{profile.name}</strong>. {t('footer.rights')}</span>
          <span className="footer__updated">{t('footer.updated')}: {formatDate(BUILD_TIME.slice(0, 10), lang)}</span>
        </div>
        <div className="footer__right">
          <CvButton variant="footer" />
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
