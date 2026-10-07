import { useTranslation } from 'react-i18next'
import { SECTIONS, scrollToSection } from '../sections.js'
import { useReducedMotion } from '../hooks/useReducedMotion.js'

// Section menu laid out along a dashed shipping route; the active section lights up like a port of call.
export default function RouteNav({ active, onNavigate }) {
  const { t } = useTranslation()
  const reduced = useReducedMotion()
  return (
    <nav className="route-nav" aria-label={t('nav.primary')}>
      <ol>
        {SECTIONS.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              aria-current={active === s.id ? 'true' : undefined}
              onClick={(e) => {
                e.preventDefault()
                onNavigate?.()
                scrollToSection(s.id, reduced)
              }}
            >
              <span className="route-nav__num">{String(i + 1).padStart(2, '0')}</span>
              {t(`nav.${s.id}`)}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
