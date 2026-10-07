// Inject the server rendered English page into dist/index.html so content paints before JS runs.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const outDir = resolve(root, process.env.PRERENDER_OUT || 'dist')
const ssrEntry = resolve(root, 'dist-ssr', 'entry-server.js')

const { render } = await import(pathToFileURL(ssrEntry).href)
const html = await render()
const indexPath = resolve(outDir, 'index.html')
const template = readFileSync(indexPath, 'utf8')
if (!template.includes('<div id="root"></div>')) throw new Error('root placeholder not found in index.html')
writeFileSync(indexPath, template.replace('<div id="root"></div>', `<div id="root">${html}</div>`))
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`Prerendered ${(html.length / 1024).toFixed(1)} KB of HTML into ${indexPath}`)
