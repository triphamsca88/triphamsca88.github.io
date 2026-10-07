import { useTranslation } from 'react-i18next'
import Sidebar from './components/Sidebar.jsx'
import Hero from './components/Hero.jsx'
import KpiStrip from './components/KpiStrip.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Leadership from './components/Leadership.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Certifications from './components/Certifications.jsx'
import Awards from './components/Awards.jsx'
import Footer from './components/Footer.jsx'
import { LightboxProvider } from './components/Lightbox.jsx'
import { useScrollSpy } from './hooks/useScrollSpy.js'
import { SECTION_IDS } from './sections.js'

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
          <Education />
          <Experience />
          <Leadership />
          <Skills />
          <Projects />
          <Certifications />
          <Awards />
        </main>
        <Footer />
      </div>
    </LightboxProvider>
  )
}
