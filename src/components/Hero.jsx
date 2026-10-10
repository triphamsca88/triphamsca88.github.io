import { ArrowRight } from 'lucide-react'
import { useLocalized } from '../i18n/useLocalized.js'
import profile from '../data/profile.js'
import { asset } from '../utils/asset.js'
import { scrollToSection } from '../sections.js'
import { useReducedMotion } from '../hooks/useReducedMotion.js'

/* global __HERO_V__ */
const HERO_SRC = `img/hero_supply_chain.svg${typeof __HERO_V__ === 'string' ? `?v=${__HERO_V__}` : ''}`

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
        src={asset(HERO_SRC)}
        alt="Animated supply chain network from supplier to customer, with a barge on an inland waterway and analytics cards for fleet performance and demand forecast"
        fetchPriority="high"
      />
      <div className="hero__inner">
        <div className="hero__panel">
          <span className="hero__eyebrow">{t('hero.greeting')}</span>
          <h1 className="hero__name" id="hero-name">{profile.name}</h1>
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
