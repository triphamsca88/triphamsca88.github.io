import { Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import profile from '../data/profile.js'
import { FacebookIcon, GitHubIcon, LinkedInIcon } from './BrandIcon.jsx'

export default function ContactIcons() {
  const { t } = useTranslation()
  return (
    <div className="contact-icons">
      <a className="icon-btn" href={`mailto:${profile.email}`} aria-label={`${t('contact.email')}: ${profile.email}`} title={profile.email}>
        <Mail aria-hidden="true" />
      </a>
      <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label={t('contact.linkedin')} title="LinkedIn">
        <LinkedInIcon />
      </a>
      <a className="icon-btn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label={t('contact.github')} title="GitHub">
        <GitHubIcon />
      </a>
      <a className="icon-btn" href={profile.facebook} target="_blank" rel="noopener noreferrer" aria-label={t('contact.facebook')} title="Facebook">
        <FacebookIcon />
      </a>
    </div>
  )
}
