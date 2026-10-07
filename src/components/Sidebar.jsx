import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLocalized } from '../i18n/useLocalized.js'
import profile from '../data/profile.js'
import { asset } from '../utils/asset.js'
import RouteNav from './RouteNav.jsx'
import ContactIcons from './ContactIcons.jsx'
import LangSwitch from './LangSwitch.jsx'
import { useScrollSpy } from '../hooks/useScrollSpy.js'
import { SECTION_IDS } from '../sections.js'

function Avatar({ small }) {
  return (
    <span className={`avatar${small ? ' avatar--sm' : ''}`} aria-hidden={small ? 'true' : undefined}>
      {profile.avatar ? <img src={asset(profile.avatar)} alt={profile.name} /> : profile.initials}
    </span>
  )
}

export default function Sidebar() {
  const { t, L } = useLocalized()
  // Scrollspy state lives here so only the menu re-renders while scrolling.
  const active = useScrollSpy(SECTION_IDS)
  const [open, setOpen] = useState(false)

  // Close the mobile menu with Esc or when the viewport grows to desktop width.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    const mq = window.matchMedia('(min-width: 992px)')
    const onMq = () => { if (mq.matches) setOpen(false) }
    document.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    return () => {
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
    }
  }, [open])

  return (
    <>
      <aside className="sidebar" aria-label={profile.name}>
        <div className="sidebar__id">
          <Avatar />
          <p className="sidebar__name">{profile.name}</p>
          <span className="container-tag">{L(profile.title)}</span>
          <p className="sidebar__tagline">{L(profile.tagline)}</p>
        </div>
        <RouteNav active={active} />
        <div className="sidebar__foot">
          <ContactIcons />
          <LangSwitch />
        </div>
      </aside>

      <header className="topbar">
        <a className="topbar__brand" href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0 }) }}>
          <Avatar small />
          <div>
            <span className="topbar__name">{profile.name}</span>
            <span className="topbar__role">{L(profile.title)}</span>
          </div>
        </a>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>
      {open && (
        <div className="mobile-menu" id="mobile-menu">
          <RouteNav active={active} onNavigate={() => setOpen(false)} />
          <div className="sidebar__foot">
            <ContactIcons />
            <LangSwitch />
          </div>
        </div>
      )}
    </>
  )
}
