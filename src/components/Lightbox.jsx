import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { asset } from '../utils/asset.js'

const LightboxContext = createContext(() => {})

// Shared image viewer: open with useLightbox()({ src, alt, caption }).
// Closes on Esc, on a click outside the image and with the close button; focus stays inside while open.
export function LightboxProvider({ children }) {
  const [item, setItem] = useState(null)
  const open = useCallback((next) => setItem(next), [])
  const close = useCallback(() => setItem(null), [])
  return (
    <LightboxContext.Provider value={open}>
      {children}
      {item && <LightboxDialog item={item} onClose={close} />}
    </LightboxContext.Provider>
  )
}

export function useLightbox() {
  return useContext(LightboxContext)
}

function LightboxDialog({ item, onClose }) {
  const { t } = useTranslation()
  const dialogRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    const previous = document.activeElement
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const focusable = dialogRef.current?.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])')
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      previous?.focus?.()
    }
  }, [onClose])

  return (
    <div className="lightbox" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="lightbox__dialog" role="dialog" aria-modal="true" aria-label={item.caption || item.alt} ref={dialogRef}
        onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
        <img className="lightbox__img" src={asset(item.src)} alt={item.alt} />
        <div className="lightbox__bar">
          <p className="lightbox__caption">{item.caption}</p>
          <span className="lightbox__hint">{t('common.escHint')}</span>
        </div>
        <button type="button" className="lightbox__close" onClick={onClose} ref={closeRef} aria-label={t('common.close')}>
          <X aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
