# Pham Duc Tri · Portfolio

Personal portfolio of Pham Duc Tri, Supply Chain Analyst Intern and Logistics Technology student at UEH.
Live at **https://triphamsca88.github.io/**.

Built with React and Vite, set in Lexend. The page is prerendered at build time so content paints before
JavaScript loads, then hydrates in the browser.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/ (includes prerender)
npm run preview   # serve dist/ at http://localhost:4173
npm run check     # privacy scan + visible text dash check
```

## Update content

All text lives in data files, so updates rarely touch components.

| What | File |
|---|---|
| Name, summary, contact, KPI figures | `src/data/profile.js` |
| Education | `src/data/education.js` |
| Work experience | `src/data/experience.js` |
| Leadership and activities | `src/data/leadership.js` |
| Skills | `src/data/skills.js` |
| Certifications | `src/data/certificates.js` |
| Honors and awards | `src/data/awards.js` |
| Projects (the "In transit" card hides itself once this has an item) | `src/data/projects.js` |
| Interface labels | `src/i18n/en.json` |

Text fields use `{ en: '...' }` (older entries may still carry an unused `vi` value). Dates use ISO strings (`'2026-04'` or `'2026-04-17'`);
lists sort newest first automatically and the certificate and award counts on the KPI strip are derived from data.
Leave `logo`, `image`, `credentialId` or `verifyUrl` empty and that part of the card is hidden.

### Images

Raw files go in `_source/` (never committed). `python scripts/process_images.py` converts them into
`public/img/` (WebP, certificates at 1400px plus 480px thumbnails, each under 300KB) and applies the solid
privacy masks defined in that script. Always review masked images before committing.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages
(Settings → Pages → Source: GitHub Actions).

## Social preview

`public/og-image.png` (1200×630) is rendered from `scripts/og-template.html` with a headless browser.
