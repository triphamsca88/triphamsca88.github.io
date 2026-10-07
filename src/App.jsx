// Step 3 (temporary): raw data listing to cross check content against NOI_DUNG_PORTFOLIO.md.
import './i18n/index.js'
import { useLocalized } from './i18n/useLocalized.js'
import profile from './data/profile.js'
import education from './data/education.js'
import experience from './data/experience.js'
import leadership from './data/leadership.js'
import skills from './data/skills.js'
import certificates from './data/certificates.js'
import awards from './data/awards.js'
import { newestFirst, formatDate, formatRange } from './utils/dates.js'
import { certificateCount, awardCount } from './data/stats.js'

export default function App() {
  const { t, i18n, lang, L } = useLocalized()
  return (
    <main style={{ padding: 24, fontFamily: 'var(--font-body)' }}>
      <button onClick={() => i18n.changeLanguage(lang === 'en' ? 'vi' : 'en')}>{lang.toUpperCase()}</button>
      <h1>{profile.name}: {L(profile.title)}</h1>
      <p>{L(profile.summary)}</p>
      <p>Certificates: {certificateCount()} | Awards: {awardCount()}</p>
      <h2>Education</h2>
      <ul>{newestFirst(education).map((e) => <li key={e.id}>{L(e.title)}, {e.org} ({formatRange(e.start, e.end, lang, t)})</li>)}</ul>
      <h2>Experience</h2>
      <ul>{newestFirst(experience).map((e) => <li key={e.id}>{L(e.title)}, {e.org} ({formatRange(e.start, e.end, lang, t)})<ul>{e.bullets.map((b, i) => <li key={i}>{L(b)}</li>)}</ul></li>)}</ul>
      <h2>Leadership</h2>
      <ul>{leadership.map((o) => <li key={o.id}>{o.org}<ul>{o.roles.map((r, i) => <li key={i}>{L(r.title)} ({formatRange(r.start, r.end, lang, t)}): {L(r.description)}</li>)}</ul></li>)}</ul>
      <h2>Skills</h2>
      <ul>{skills.map((g) => <li key={g.id}>{L(g.title)}: {g.items.map((s) => L(s.label)).join(', ')}</li>)}</ul>
      <h2>Certifications</h2>
      <ol>{newestFirst(certificates).map((c) => <li key={c.id}>{c.name}, {c.issuer}, {formatDate(c.date, lang)} [{c.category}]</li>)}</ol>
      <h2>Awards</h2>
      <ol>{newestFirst(awards).map((a) => <li key={a.id}>{L(a.rank)}: {a.title}, {a.org}, {formatDate(a.date, lang)}</li>)}</ol>
    </main>
  )
}
