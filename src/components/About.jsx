import { useState } from 'react'
import { Check, Copy, ArrowUpRight } from 'lucide-react'
import { useLocalized } from '../i18n/useLocalized.js'
import profile from '../data/profile.js'
import SectionHeader from './SectionHeader.jsx'
import { codeOf } from '../sections.js'
import { GitHubIcon, LinkedInIcon } from './BrandIcon.jsx'

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
    <span className="manifest__email">
      <a href={`mailto:${profile.email}`} id="about-email">{profile.email}</a>
      <button type="button" className="copy-btn" onClick={copy} aria-label={t('contact.copy')}>
        {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
        <span aria-live="polite">{copied ? t('contact.copied') : t('contact.copyShort')}</span>
      </button>
    </span>
  )
}

export default function About() {
  const { t, L } = useLocalized()
  return (
    <section className="section section--first" id="about" aria-labelledby="about-title" tabIndex={-1}>
      <div className="section__inner">
        <SectionHeader code={codeOf('about')} title={t('sections.about')} id="about-title" />
        <div className="about">
          <p className="about__lead">{L(profile.summary)}</p>
          <aside className="manifest" aria-label={t('about.manifest')}>
            <div className="manifest__head">
              <span>{t('about.manifest')}</span>
              <span aria-hidden="true">{profile.initials}</span>
            </div>
            <dl>
              <div className="manifest__row"><dt>{t('about.study')}</dt><dd>{t('about.studyValue')}</dd></div>
              <div className="manifest__row"><dt>{t('about.gpa')}</dt><dd className="mono">{profile.gpa.value.toFixed(2)}{profile.gpa.suffix} ({profile.gpa.note})</dd></div>
              <div className="manifest__row"><dt>{t('about.latest')}</dt><dd>{t('about.latestValue')}</dd></div>
              <div className="manifest__row"><dt>{t('about.languages')}</dt><dd>{t('about.languagesValue')}</dd></div>
              <div className="manifest__row">
                <dt>{t('about.contact')}</dt>
                <dd className="manifest__links">
                  <CopyEmail />
                  <a className="inline-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon /> LinkedIn <ArrowUpRight aria-hidden="true" />
                  </a>
                  <a className="inline-link" href={profile.github} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon /> github.com/triphamsca88 <ArrowUpRight aria-hidden="true" />
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}
