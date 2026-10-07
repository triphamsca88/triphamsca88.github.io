import Sidebar from './components/Sidebar.jsx'
import Hero from './components/Hero.jsx'
import KpiStrip from './components/KpiStrip.jsx'
import About from './components/About.jsx'
import { LightboxProvider } from './components/Lightbox.jsx'
import { useScrollSpy } from './hooks/useScrollSpy.js'
import { SECTION_IDS } from './sections.js'
import { useTranslation } from 'react-i18next'

export default function App() {
  const { t } = useTranslation()
  const active = useScrollSpy(SECTION_IDS)
  return (
    <LightboxProvider>
      <a className="skip-link" href="#main">{t('nav.skip')}</a>
      <Sidebar active={active} />
      <div className="main">
        <Hero />
        <KpiStrip />
        <main id="main" tabIndex={-1}>
          <About />
        </main>
      </div>
    </LightboxProvider>
  )
}
