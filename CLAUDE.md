# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Production build (runs type-check + lint)
npm run lint         # ESLint check
```

No test framework is configured — this is a marketing/showcase site.

## Project Overview

Single-page marketing site for **AEJ Rénovation** (Toulouse renovation company). Built with Next.js 14 App Router, Tailwind CSS, and Framer Motion. Deployed on Vercel.

**Business info:**
- Phone: 06 24 29 53 42
- Address: 7 Chemin de Papus, 31100 Toulouse
- Target domain: aej-renovation.fr

## Architecture

All content lives in a single route (`app/page.tsx`) that composes these components in order:

```
Header → Hero → Services → Testimonials → WhyUs → Contact → Footer → WhatsAppWidget
```

**Key files:**
- `app/layout.tsx` — Root layout with Inter font, metadata, and SEO tags
- `app/api/contact/route.ts` — Contact form POST handler (currently logs; see comments for Resend integration)
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)

## Design System

**Colors:** Orange (`#F97316` / orange-500) for CTAs, Slate-900 for hero background, white for content sections, slate-50 for alternate sections.

**Animations:** All scroll-triggered animations use Framer Motion `whileInView` with `viewport={{ once: true }}`. Hero uses staggered `variants` container/item pattern.

**Section IDs** (must match nav hrefs): `#accueil` (Hero), `#services`, `#realisations` (Testimonials), `#contact`.

## Adding Email to the Contact Form

1. Install Resend: `npm install resend`
2. Add env vars to `.env.local` (see `.env.local.example`)
3. Uncomment the Resend block in `app/api/contact/route.ts`

## Images

Hero background uses Unsplash (`images.unsplash.com` is whitelisted in `next.config.ts`). Replace with owned photos by adding them to `public/` and updating `components/Hero.tsx`.
