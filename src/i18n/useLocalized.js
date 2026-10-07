import { useTranslation } from 'react-i18next'

// Read the English text of a data field ({ en } objects, or plain strings that pass through).
// Older entries still carry a `vi` value; it is no longer shown.
export function useLocalized() {
  const { t, i18n } = useTranslation()
  const lang = 'en'
  const L = (field) => {
    if (field == null) return ''
    if (typeof field === 'string') return field
    return field[lang] ?? field.en ?? ''
  }
  return { t, i18n, lang, L }
}
