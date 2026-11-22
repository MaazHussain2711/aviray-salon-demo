# AVIRAY Unisex Salon

Next.js App Router website with React, TypeScript, responsive styling, accessible native dialogs and a static export for GitHub Pages.

## Development

Use Node.js 22 LTS or newer. Run `npm ci` when the lockfile is present, or `npm install` for first setup, then `npm run dev`. Open http://localhost:3000.

Checks: `npm run typecheck`, `npm run lint`, `npm audit --omit=dev --audit-level=high`, `npm run build`.

`npm run build` exports into `out/`. `npm run preview` serves it at http://localhost:4173. Set `NEXT_PUBLIC_BASE_PATH=/aviray-salon-demo` for both build and preview to mirror project Pages, or leave it empty for a root-domain build.

## Structure

- `src/app`: home, privacy policy, metadata, sitemap, robots and 404.
- `src/components`: content sections and React interactions.
- `src/lib`: salon configuration, gallery data and privacy copy.
- `public/assets`: approved brand artwork and AI-generated unisex campaign imagery.
- `.github/workflows/pages.yml`: dependency audit, TypeScript, lint, static build and deployment.

The `launch-review` branch builds without deploying. The `main` branch deploys only after checks succeed. GitHub Pages source must be GitHub Actions. The workflow sets the repository base path. Update `siteURL` in `src/lib/site.ts` when moving to a custom domain.

## Operating scope

The owner confirmed the public phone/WhatsApp and address on 22 November 2026. Exact prices and opening hours were not supplied, so visitors are asked to contact the salon. No reviews, ratings, prices, discounts or credentials have been invented.

Appointments are enquiries, with a separate review step before WhatsApp. No automatic slot confirmation, booking database, payment collection, analytics or marketing-cookie tracking is included. The salon must reply before a booking is confirmed.

Hero artwork is AI-generated and encoded as WebP. Unsplash photos are editorial inspiration, not salon client results; visitors are informed of this. The map artwork is illustrative; Google Maps supplies directions. Replace editorial imagery with approved salon photography as it becomes available.

Google Fonts supplies Cormorant Garamond and DM Sans, with local font fallbacks. Third-party requests are described in the privacy policy.

## Release verification

Check the home and privacy routes, local asset paths, mobile/desktop layouts, form validation and service preselection, gallery filtering, Escape and backdrop closing, focus restoration, and phone/Maps/WhatsApp destinations. Never send testing enquiries to the salon.
