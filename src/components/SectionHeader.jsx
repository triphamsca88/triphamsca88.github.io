// Section heading: a small route number beside the title, for example "04  Leadership & Activities".
export default function SectionHeader({ num, title, id }) {
  return (
    <header className="section-head">
      <h2 className="section-head__title" id={id}>
        <span className="section-head__num" aria-hidden="true">{num}</span>
        <span>{title}</span>
      </h2>
    </header>
  )
}
