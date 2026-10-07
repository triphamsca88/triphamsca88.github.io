import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
// Bootstrap is used only for reboot, grid and utilities; all visual styling lives in app.css.
import './styles/bootstrap.scss'
import './styles/theme.css'
import './styles/app.css'
import i18n from './i18n/index.js'
import App from './App.jsx'

// Web fonts load without blocking the first paint (media="print" in index.html), then apply here.
document.querySelectorAll('link[data-fonts]').forEach((link) => { link.media = 'all' })

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// The build prerenders the English page into #root (scripts/prerender.mjs). Hydrate it when the
// visitor reads English; for another remembered language, render fresh instead of patching.
if (container.hasChildNodes() && i18n.language === 'en') hydrateRoot(container, app)
else {
  container.textContent = ''
  createRoot(container).render(app)
}
