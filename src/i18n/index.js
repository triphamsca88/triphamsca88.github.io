import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'

// English only (Vietnamese was removed at the owner's request). Interface strings stay in en.json
// so labels can be edited in one place.
i18n.use(initReactI18next).init({
  resources: { en: { translation: en } },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n
