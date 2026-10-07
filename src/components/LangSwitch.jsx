import { useTranslation } from 'react-i18next'
import { LANGS } from '../i18n/index.js'

export default function LangSwitch() {
  const { t, i18n } = useTranslation()
  return (
    <div className="lang-switch" role="group" aria-label={t('lang.label')}>
      {LANGS.map((lng) => (
        <button key={lng} type="button" lang={lng} aria-pressed={i18n.language === lng} onClick={() => i18n.changeLanguage(lng)}>
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
