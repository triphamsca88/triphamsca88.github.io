// Server entry used only at build time to prerender the English page (see scripts/prerender.mjs).
import { renderToString } from 'react-dom/server'
import i18n from './i18n/index.js'
import App from './App.jsx'

export async function render() {
  await i18n.changeLanguage('en')
  return renderToString(<App />)
}
