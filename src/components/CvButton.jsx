import { ArrowUpRight, FileText } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import profile from '../data/profile.js'
import { asset } from '../utils/asset.js'

/* global __CV_V__ */
const CV_VERSION = typeof __CV_V__ === 'string' ? `?v=${__CV_V__}` : ''

// Opens the public CV (PDF) in a new tab; the browser's PDF viewer offers download and print.
export default function CvButton({ variant = 'full' }) {
  const { t } = useTranslation()
  if (!profile.cv) return null
  return (
    <a className={`cv-btn cv-btn--${variant}`} href={`${asset(profile.cv)}${CV_VERSION}`} target="_blank" rel="noopener noreferrer"
      aria-label={t('cv.aria')} title={t('cv.aria')}>
      <FileText aria-hidden="true" />
      <span>{variant === 'compact' ? t('cv.short') : t('cv.label')}</span>
      {variant === 'full' && <ArrowUpRight className="cv-btn__arrow" aria-hidden="true" />}
    </a>
  )
}
