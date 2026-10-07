// Lists every visible text value in src/data and src/i18n that contains a hyphen or dash.
// URLs, ids, asset paths and ISO dates are skipped. Exit code 1 when something is found.
import { readFileSync } from 'node:fs'

const SKIP_KEYS = new Set(['id', 'logo', 'image', 'thumb', 'verifyUrl', 'linkedin', 'github', 'demo', 'date', 'start', 'end', 'email', 'avatar', 'facebook', 'credentialId'])
const DASH = /[-‐-―−]/
const hits = []

function walk(value, path) {
  if (typeof value === 'string') {
    if (/^(https?:|img\/|mailto:)/.test(value) || /^\d{4}(-\d{2}){0,2}$/.test(value)) return
    if (DASH.test(value)) hits.push(`${path}: ${value}`)
    return
  }
  if (Array.isArray(value)) return value.forEach((v, i) => walk(v, `${path}[${i}]`))
  if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) if (!SKIP_KEYS.has(k)) walk(v, `${path}.${k}`)
  }
}

const dataFiles = ['profile', 'education', 'experience', 'leadership', 'skills', 'certificates', 'awards', 'projects']
for (const f of dataFiles) {
  const mod = await import(new URL(`../src/data/${f}.js`, import.meta.url))
  walk(mod.default, f)
}
for (const f of ['en']) walk(JSON.parse(readFileSync(new URL(`../src/i18n/${f}.json`, import.meta.url))), f)

if (hits.length) {
  console.log(hits.join('\n'))
  process.exit(1)
}
console.log('Dash check passed: no hyphens or dashes in visible text.')
