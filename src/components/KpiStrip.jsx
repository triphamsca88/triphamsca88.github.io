import { useTranslation } from 'react-i18next'
import profile from '../data/profile.js'
import { awardCount, certificateCount } from '../data/stats.js'
import { useCountUp } from '../hooks/useCountUp.js'

function KpiCell({ label, value, decimals = 0, suffix, note }) {
  const [ref, shown] = useCountUp(value, { decimals })
  const final = value.toFixed(decimals)
  return (
    <li className="kpi__cell">
      <span className="kpi__label"><span className="kpi__dot" aria-hidden="true" />{label}</span>
      <span className="kpi__value" ref={ref}>
        <span aria-hidden="true">{shown}</span>
        <span className="visually-hidden">{final}</span>
        {suffix && <span className="kpi__suffix">{suffix}</span>}
      </span>
      <span className="kpi__note">{note}</span>
    </li>
  )
}

// Operations style dashboard strip under the hero. Counts come from the data files.
export default function KpiStrip() {
  const { t } = useTranslation()
  return (
    <div className="kpi-wrap">
      <ul className="kpi" aria-label={t('kpi.aria')}>
        <KpiCell label={t('kpi.gpa')} value={profile.gpa.value} decimals={profile.gpa.decimals} suffix={profile.gpa.suffix} note={t('kpi.gpaNote', { note: profile.gpa.note })} />
        <KpiCell label={t('kpi.internship')} value={profile.internshipMonths} note={t('kpi.internshipNote')} />
        <KpiCell label={t('kpi.awards')} value={awardCount()} note={t('kpi.awardsNote')} />
        <KpiCell label={t('kpi.certificates')} value={certificateCount()} note={t('kpi.certificatesNote')} />
      </ul>
    </div>
  )
}
