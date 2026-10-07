import { ArrowRight } from 'lucide-react'
import { useLocalized } from '../i18n/useLocalized.js'
import profile from '../data/profile.js'
import { asset } from '../utils/asset.js'
import { scrollToSection } from '../sections.js'
import { useReducedMotion } from '../hooks/useReducedMotion.js'

export default function Hero() {
  const { t, L } = useLocalized()
  const reduced = useReducedMotion()
  const go = (id) => (e) => {
    e.preventDefault()
    scrollToSection(id, reduced)
  }
  return (
    <section className="hero" id="top" aria-labelledby="hero-name">
      <img
        className="hero__img"
        src={asset('img/hero_supply_chain.svg')}
        alt="Animated supply chain network from supplier to customer, with a barge on an inland waterway and analytics cards for fleet performance and demand forecast"
        fetchPriority="high"
      />
      <div className="hero__inner">
        <div className="hero__panel">
          <span className="hero__eyebrow">{t('hero.greeting')}</span>
          <h1 className="hero__name" id="hero-name">{profile.name}</h1>
          <p className="hero__role">
            <span className="hero__role-title">{L(profile.title)}</span>
            <span className="hero__role-sub">{L(profile.tagline)}</span>
          </p>
          <p className="hero__intro">{L(profile.intro)}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#about" onClick={go('about')}>
              {t('hero.aboutBtn')} <ArrowRight aria-hidden="true" />
            </a>
            <a className="btn btn--ghost" href="#experience" onClick={go('experience')}>
              {t('hero.experienceBtn')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
