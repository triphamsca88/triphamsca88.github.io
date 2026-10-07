// Section heading with a mono shipment style code, for example "01 · ABOUT".
export default function SectionHeader({ code, title, id }) {
  return (
    <header className="section-head">
      <span className="section-head__code" aria-hidden="true">{code}</span>
      <h2 className="section-head__title" id={id}>{title}</h2>
    </header>
  )
}
