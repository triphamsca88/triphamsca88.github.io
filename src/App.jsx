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

export default function App() {
  const { t } = useTranslation()
  return (
    <LightboxProvider>
      <a className="skip-link" href="#about">{t('nav.skip')}</a>
      <Sidebar />
      <div className="main">
        <main id="main">
          <Hero />
          <KpiStrip />
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
