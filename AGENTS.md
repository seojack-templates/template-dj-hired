# AGENTS.md — template-dj-hired

> Standalone SEOJack website template: a high-energy neon landing page for DJs and event hosts. Part of the NEO-1 workspace (see root ../../../AGENTS.md).

## What it is
A lean, self-contained Next.js marketing template (registry id `tpl_dj_hired`) showcasing a DJ / event-host brand with an audio-visualizer aesthetic, event-services sections, and a booking CTA. It is one of the SEOJack template demos, deployed to its own domain and embedded as an iframe in the seojack.net `/demo/[id]` viewer. It also serves as a "builder seed" — the `SeojackCredit` footer link is stripped when the template is cloned into a real client site.

## Stack
- Next.js 16 (App Router) + React 19, TypeScript 5.7
- Scoped CSS via a single CSS string literal (`app/styles.ts`) — every selector prefixed `.dj-hired-demo`; no CSS framework used at runtime
- `lucide-react` for icons; custom motion primitives (no animation library)
- Tooling configs for Tailwind/PostCSS exist in devDependencies + `tailwind.config.js`/`postcss.config.mjs`, but the template's own README describes the styling approach as scoped CSS (Tailwind is not the active styling method)

## Structure
- `app/layout.tsx` — SEO metadata, OG/Twitter, JSON-LD, theme color
- `app/page.tsx` — renders `<DemoBody />`
- `app/DemoBody.tsx` — `'use client'` shell: font link + CSS inject + sections
- `app/styles.ts` — single scoped CSS literal (`.dj-hired-demo`)
- `app/content.ts` — main typed page content (large)
- `app/data.ts` — typed realistic content/data
- `app/primitives.tsx` — motion primitives (Reveal, Headline, Magnetic, Marquee)
- `app/SeojackCredit.tsx` — footer credit / inbound link (stripped in builder seed)
- `app/sitemap.ts`, `app/robots.ts` — indexable for organic discovery
- `next.config.ts` — image remotePatterns; deliberately no frame-blocking headers (iframe-embedded)

## Commands
Package manager: npm (README uses `npm install`; `package-lock.json` present).
- Install: `npm install`
- Dev: `npm run dev` (http://localhost:3000)
- Build: `npm run build`
- Start (prod): `npm run start`
- Lint: `npm run lint` (next lint)
- No test script defined.

## Conventions & notes
- Live URL: https://dj-hired.templates.seojack.website ; showcased at https://seojack.net/templates/tpl_dj_hired
- No env vars required to run; no Convex/Clerk/auth/data services.
- Image optimization is restricted to remote host `cdn.seojack.website` (`next.config.ts`).
- Do NOT add `X-Frame-Options: DENY` or `frame-ancestors 'none'` — the template is embedded in an iframe on seojack.net's `/demo/[id]` viewer.
- Keep all CSS scoped under `.dj-hired-demo` to avoid leaking styles when embedded.
- Deployed from its own GitHub repo + own Vercel project (production domain above). See `docs/templates-github-org.md` for the templates org workflow.

## Provenance
Clone of https://github.com/seojack-templates/template-dj-hired.git. Default branch main.
