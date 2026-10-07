import { useTranslation } from 'react-i18next'

// Pick the active language from a bilingual field { en, vi }. Plain strings pass through.
export function useLocalized() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'vi' ? 'vi' : 'en'
  const L = (field) => {
    if (field == null) return ''
    if (typeof field === 'string') return field
    return field[lang] ?? field.en ?? ''
  }
  return { t, i18n, lang, L }
}
