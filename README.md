# Durozen Website

Enterprise IT services website for Durozen — built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS v4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command          | Description                       |
| ---------------- | --------------------------------- |
| `npm run dev`    | Start the development server      |
| `npm run build`  | Production build                  |
| `npm run start`  | Serve the production build        |
| `npm run lint`   | Run ESLint                        |
| `npm run format` | Format the codebase with Prettier |

## Environment Variables

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` — Google Apps Script Web App endpoint used by the Contact and Careers forms (see `scripts/contact-form-backend.gs`).

## Structure

- `src/app/` — Next.js App Router (routes + root layout + metadata)
- `src/pages/` — Page components (migrated from the original Vite app)
- `src/components/` — Shared components (Navigation, Footer, Logo, ScrollToTop)
- `public/` — Static assets
