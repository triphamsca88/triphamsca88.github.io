import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Bootstrap is used only for reboot, grid and utilities; all visual styling lives in app.css.
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'
import './styles/theme.css'
import './styles/app.css'
import './i18n/index.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
