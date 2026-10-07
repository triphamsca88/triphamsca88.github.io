import { FileText } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useLightbox } from './Lightbox.jsx'

// "View certificate" button that opens the shared lightbox. Renders nothing without an image.
export default function CertificateButton({ image, alt, caption, label, className = 'btn-outline' }) {
  const { t } = useTranslation()
  const openLightbox = useLightbox()
  if (!image) return null
  return (
    <button type="button" className={className} onClick={() => openLightbox({ src: image, alt, caption })}>
      <FileText aria-hidden="true" />
      {label || t('common.viewCertificate')}
    </button>
  )
}
