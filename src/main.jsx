import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
// Bootstrap is used only for reboot, grid and utilities; all visual styling lives in app.css.
import './styles/bootstrap.scss'
import './styles/theme.css'
import './styles/app.css'
import './i18n/index.js'
import App from './App.jsx'

// Web fonts load without blocking the first paint (media="print" in index.html), then apply here.
document.querySelectorAll('link[data-fonts]').forEach((link) => { link.media = 'all' })

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// The build prerenders the page into #root (scripts/prerender.mjs); hydrate it when present.
if (container.hasChildNodes()) hydrateRoot(container, app)
else createRoot(container).render(app)
