# Durozen Website Architecture

## Architectural Changes Log

_Note: Each time the architecture changes, append the change in this section with a timestamp. NEVER overwrite the historical architecture._

### [2026-07-08 10:50:00] Initial Duro POS Architecture Tracking

### [2026-07-08 13:15:00] Migrated configuration to Durozen Website

### [2026-09-22 21:12:00] Next.js App Router Migration

- Replaced Vite + React Router with Next.js 16 (App Router, Turbopack, TypeScript).
- Page components moved to `src/views/` (NOT `src/pages/` — that path is reserved for the Pages Router and caused duplicate routes).
- Thin route files in `src/app/**/page.tsx` export per-route `metadata` and render the view components.
- `react-helmet-async` replaced by the Next Metadata API in `src/app/layout.tsx`; `react-router-dom` replaced by `next/link` + `usePathname`.
- Tailwind v4 tokens kept in `src/app/globals.css` (`@theme` + `@layer base`); fonts via `next/font/google` (Montserrat, Inter).
- Favicon: `src/app/icon.png` (from `public/logo.png`). Env: `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`.
- Old Vite app preserved in `frontend-old/` (gitignored).

## Code Files & Folders Structure

```text
Durozen Website (Root)
├── public/                 # Static assets (images, robots.txt, sitemap.xml)
├── frontend-old/           # Pre-migration Vite app (gitignored, reference only)
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── layout.tsx      # Root layout: fonts, metadata, shell (Nav/main/Footer)
│   │   ├── globals.css     # Tailwind v4 @theme tokens + base layer
│   │   ├── icon.png        # Favicon
│   │   └── **/page.tsx     # Thin routes (metadata + render view component)
│   ├── views/              # Page components (migrated from old src/pages/)
│   │   ├── Home.tsx  About.tsx  Services.tsx  Solutions.tsx
│   │   ├── CaseStudies.tsx  Careers.tsx  Contact.tsx
│   │   └── PrivacyPolicy.tsx  TermsOfService.tsx  CookiePolicy.tsx
│   └── components/         # Navigation, Footer, Logo, ScrollToTop
├── package.json            # next/react/lucide-react/motion + tailwind v4
├── eslint.config.mjs       # eslint-config-next (strict, no rule suppressions)
├── .prettierrc             # singleQuote, trailingComma: all
├── next.config.ts
└── tsconfig.json           # paths: @/* → ./src/*
```
