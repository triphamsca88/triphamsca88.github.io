import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import vi from './vi.json'

const STORAGE_KEY = 'portfolio.lang'
export const LANGS = ['en', 'vi']

// localStorage may be unavailable (private mode, blocked storage): fall back to English.
function readSavedLang() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return LANGS.includes(saved) ? saved : 'en'
  } catch {
    return 'en'
  }
}

function saveLang(lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    /* storage blocked: the choice simply is not remembered */
  }
}

function applyDocumentLang(lang) {
  if (typeof document === 'undefined') return // prerender (Node)
  document.documentElement.lang = lang
  const t = i18n.getFixedT(lang)
  document.title = t('meta.title')
}

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, vi: { translation: vi } },
  lng: readSavedLang(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

applyDocumentLang(i18n.language)
i18n.on('languageChanged', (lang) => {
  saveLang(lang)
  applyDocumentLang(lang)
})

export default i18n
