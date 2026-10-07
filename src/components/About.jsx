import { useState } from 'react'
import { Check, Copy, ArrowUpRight } from 'lucide-react'
import { useLocalized } from '../i18n/useLocalized.js'
import profile from '../data/profile.js'
import { asset } from '../utils/asset.js'
import SectionHeader from './SectionHeader.jsx'
import { codeOf } from '../sections.js'
import { FacebookIcon, GitHubIcon, LinkedInIcon } from './BrandIcon.jsx'

function CopyEmail() {
  const { t } = useLocalized()
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // Clipboard refused: select the address so it can be copied manually.
      const node = document.getElementById('about-email')
      const range = document.createRange()
      range.selectNodeContents(node)
      const sel = window.getSelection()
      sel.removeAllRanges()
      sel.addRange(range)
    }
  }
  return (
    <span className="glance__email">
      <a href={`mailto:${profile.email}`} id="about-email">{profile.email}</a>
      <button type="button" className="copy-btn" onClick={copy} aria-label={t('contact.copy')}>
        {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
        <span aria-live="polite">{copied ? t('contact.copied') : t('contact.copyShort')}</span>
      </button>
    </span>
  )
}

const SOCIALS = [
  { key: 'linkedin', label: 'LinkedIn', Icon: LinkedInIcon },
  { key: 'github', label: 'GitHub', Icon: GitHubIcon },
  { key: 'facebook', label: 'Facebook', Icon: FacebookIcon },
]

export default function About() {
  const { t, L } = useLocalized()
  return (
    <section className="section section--first" id="about" aria-labelledby="about-title" tabIndex={-1}>
      <div className="section__inner">
        <SectionHeader code={codeOf('about')} title={t('sections.about')} id="about-title" />
        <div className="about">
          <p className="about__lead">{L(profile.summary)}</p>
          <aside className="glance" aria-labelledby="glance-title">
            <div className="glance__head">
              {profile.avatar && (
                <img className="glance__photo" src={asset(profile.avatar)} alt="" width="320" height="320" loading="lazy" decoding="async" />
              )}
              <div>
                <h3 className="glance__title" id="glance-title">{t('about.glance')}</h3>
                <p className="glance__sub">{profile.name}</p>
              </div>
            </div>
            <dl>
              <div className="glance__row"><dt>{t('about.study')}</dt><dd>{t('about.studyValue')}</dd></div>
              <div className="glance__row"><dt>{t('about.gpa')}</dt><dd>{profile.gpa.value.toFixed(2)}{profile.gpa.suffix} ({profile.gpa.note})</dd></div>
              <div className="glance__row"><dt>{t('about.latest')}</dt><dd>{t('about.latestValue')}</dd></div>
              <div className="glance__row"><dt>{t('about.languages')}</dt><dd>{t('about.languagesValue')}</dd></div>
              <div className="glance__row"><dt>{t('about.email')}</dt><dd><CopyEmail /></dd></div>
              <div className="glance__row">
                <dt>{t('about.social')}</dt>
                <dd className="glance__social">
                  {SOCIALS.map(({ key, label, Icon }) => (
                    <a key={key} className="social-link" href={profile[key]} target="_blank" rel="noopener noreferrer">
                      <Icon /> {label} <ArrowUpRight aria-hidden="true" />
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}
