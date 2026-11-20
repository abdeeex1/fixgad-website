# FIXGAD Website

A static Astro + TypeScript public website for the FIXGAD Morocco marketplace.

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open the local URL printed by Astro.

## Production build

```bash
npm run build
npm run preview
```

The generated static site is in `dist/`.

## Deployment

Deploy the contents of `dist/` to any static host (GitHub Pages, Netlify, Cloudflare Pages, or Vercel). No server or environment variables are required.

## Languages

English is the default. French and Arabic translations are in `src/i18n/`. The Arabic view switches the document to RTL. Language selection is stored locally in the visitor's browser.

## Early-access form

The form currently validates locally and clearly reports that submissions are not stored. It is designed to be replaced with a future Supabase integration. Do not add Supabase keys or other secrets to client-side code.

## Map demonstration

The public map is a lightweight illustrative SVG, not a live availability or geocoding service. It does not use third-party tile providers, API keys, or expose customer addresses. All professionals and Missions shown are sample content.

If MapLibre and raster/vector tiles are added later, document the selected provider's terms, attribution, caching, tile limits and API-key handling before deployment.

## Brand assets

Place the supplied official logo and identity artwork in `public/assets/` and update the `<Brand />` component and metadata as needed. The repository contains no official asset files after the provided attachment URLs returned 404 in this environment.