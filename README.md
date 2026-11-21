# AVIRAY Unisex Salon · Next.js client demo

A complete Next.js App Router project with React, TypeScript, and responsive styling based on AVIRAY's supplied charcoal plum and warm ivory brand.

## Run locally

Requires Node.js 20.9 or newer (Node 22 LTS recommended).

```sh
npm install
npm run dev
```

Visit http://localhost:3000. To check and build:

```sh
npm run typecheck
npm run lint
npm run build
npm run preview
```

The production static export is written to `out/`. `npm run preview` serves that directory at http://localhost:4173. Opening an HTML file directly is not a supported Next.js preview.

## Structure

| Folder | Purpose |
| --- | --- |
| `src/app` | App Router pages, root metadata, layout, global styling, 404 |
| `src/components` | Hero, navigation, services, story, gallery, visit, FAQs, footer and shared modals |
| `src/lib` | Shared contact configuration, asset helper, gallery data and privacy content |
| `public/assets` | Approved AVIRAY logo and favicon |
| `.github/workflows/pages.yml` | Typecheck, lint, production build and GitHub Pages deployment |

Most content sections are Server Components rendered at build time. Interactive controls use small Client Components with React state and a shared appointment context. No HTML injection or legacy DOM event script is used.

## GitHub Pages

Set repository Settings > Pages > Build and deployment > Source to **GitHub Actions**. Push to `main` to build and deploy. The workflow automatically sets `NEXT_PUBLIC_BASE_PATH` to the repository name for project Pages, so logo paths and Next.js bundles work beneath `/aviray-salon-demo/`.

For a custom root domain, leave `NEXT_PUBLIC_BASE_PATH` empty and configure the domain separately. For a local subpath build, set this variable before **both** the build and preview commands. Static export and unoptimized images allow the project to run on GitHub Pages without a Node.js server.

## Features

- Branded, responsive single-page experience with navigation, service cards and clear booking entry points.
- Filterable editorial gallery and accessible native dialog lightbox.
- Native enquiry validation and a separate review step before opening a prepared WhatsApp message.
- Call and Google Maps links, FAQs, a privacy dialog, keyboard focus styles, reduced motion and skip navigation.
- Metadata and a noindex setting appropriate to a client demo.

## Demo boundaries

This is a frontend demo, not a booking backend. It stores no appointments and processes no payments. The salon must reply to an enquiry before a booking is confirmed. WhatsApp support on the listed number has not been confirmed. A future backend, authentication, CMS or payment flow requires a server-capable host or external service; GitHub Pages serves static files only.

Current address and phone are provisional, based on the public AVIRAY listing at https://kaamgpt.com/company/in/bengaluru/raghuvanahalli/list-of-salons-and-spas. Confirm them with the salon before production. No ratings, reviews, prices, staff credentials or discounts have been invented. Menu and image folders shared by the user were empty when checked.

The map illustration is decorative; use the Google Maps link for actual directions. Photos are editorial references from Unsplash, not AVIRAY premises, staff or client results. Replace with approved salon photos before launch. Brand artwork comes from the user-supplied Drive folder; its original file is included alongside whitespace-cropped web assets.

Fonts load from Google Fonts with local fallbacks. Photos load from `images.unsplash.com`. Inspirations reviewed: https://scentlifestyle.com/ and https://www.lucapiattelli.in/; copy and layout are original.

Before production: confirm menu/contact details, replace editorial photos, verify rights and privacy content, add verified social links if needed, and remove the `robots` noindex setting in `src/app/layout.tsx`.
