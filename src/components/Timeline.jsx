import { MapPin, Briefcase } from 'lucide-react'
import LogoTile from './LogoTile.jsx'

// One stop on the dashed route: a port node, the organisation logo, a heading block and free content.
export function TimelineItem({ featured, logo, logoName, title, org, location, workType, date, children }) {
  return (
    <li className={`tl-item${featured ? ' tl-item--featured' : ''}`}>
      <span className="tl-node" aria-hidden="true" />
      <div className="tl-body">
        <LogoTile src={logo} name={logoName || org} />
        <div>
          <div className="tl-head">
            <div className="tl-head__main">
              <h3 className="tl-title">{title}</h3>
              {org && <p className="tl-org">{org}</p>}
              {(location || workType) && (
                <p className="tl-meta">
                  {location && <span><MapPin aria-hidden="true" />{location}</span>}
                  {workType && <span><Briefcase aria-hidden="true" />{workType}</span>}
                </p>
              )}
            </div>
            {date && <span className="tl-date">{date}</span>}
          </div>
          {children}
        </div>
      </div>
    </li>
  )
}

export function Bullets({ items }) {
  if (!items?.length) return null
  return (
    <ul className="bullets">
      {items.map((text, i) => <li key={i}>{text}</li>)}
    </ul>
  )
}
