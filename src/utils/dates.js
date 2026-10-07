// Dates in data files are ISO strings with variable precision: 'YYYY', 'YYYY-MM' or 'YYYY-MM-DD'.

const MONTHS_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function formatDate(iso, lang = 'en') {
  if (!iso) return ''
  const [y, m, d] = iso.split('-')
  if (!m) return y
  if (lang === 'vi') {
    return d ? `${d}/${m}/${y}` : `${m}/${y}`
  }
  const month = MONTHS_EN[Number(m) - 1]
  return d ? `${d} ${month} ${y}` : `${month} ${y}`
}

// "Apr 2026 to Jul 2026", "Aug 2024 to Present"
export function formatRange(start, end, lang, t) {
  if (!start && !end) return ''
  const from = formatDate(start, lang)
  const to = end ? formatDate(end, lang) : t('common.present')
  return from ? `${from} ${t('common.to')} ${to}` : to
}

// Sort key: an ongoing item (end === null) counts as newest; undated items sink to the bottom.
function sortKey(item) {
  if (item.end === null) return '9999'
  return item.end || item.date || item.start || ''
}

export function newestFirst(list) {
  return [...list].sort((a, b) => {
    const ka = sortKey(a)
    const kb = sortKey(b)
    if (ka !== kb) return ka < kb ? 1 : -1
    const sa = a.start || ''
    const sb = b.start || ''
    return sa < sb ? 1 : sa > sb ? -1 : 0
  })
}
