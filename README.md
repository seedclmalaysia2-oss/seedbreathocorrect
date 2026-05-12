# seed-breathocorrect.com

Next.js 16 (App Router) rebuild of the SEED **Breath-O Correct** marketing site, on Vercel's recommended stack: Fluid Compute, Tailwind v4, shadcn/ui, Sanity CMS, and Resend for the lead form.

## Quickstart

```bash
npm run dev
# -> http://localhost:3000
```

The site renders with seeded fallback content out of the box. To connect the CMS and email delivery, copy the env file and fill it in:

```bash
cp .env.local.example .env.local
```

| Var | Where to get it |
| --- | --- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | [sanity.io/manage](https://sanity.io/manage) -> create a project |
| `NEXT_PUBLIC_SANITY_DATASET` | Usually `production` |
| `SANITY_API_READ_TOKEN` | Sanity -> API -> Tokens -> "Viewer" |
| `SANITY_REVALIDATE_SECRET` | Any long random string, also used in the Sanity webhook |
| `RESEND_API_KEY` | [resend.com](https://resend.com) -> API Keys |
| `CONTACT_TO_EMAIL` | Inbox that should receive contact-form messages |

## What's where

```
app/
  page.tsx                   Home
  features/                  Features overview
  patient-guide/             Patient-facing guide
  testimonials/              Patient & practitioner quotes
  faq/                       Accordion FAQ
  regular-examination/       Follow-up schedule
  clinical-outcome/          Evidence summary
  education/                 Video lessons
  instruction-for-use/       Lens handling instructions
  fittings/sphere/           Sphere fitting guide
  fittings/toric/            Toric (TD) fitting guide
  practitioners/             Resource library
  contact/                   Lead form (Resend) + regional offices
  privacy-policy/            Placeholder privacy policy
  api/revalidate/route.ts    Sanity webhook -> revalidateTag
  sitemap.ts, robots.ts      SEO
sanity/
  env.ts                     Reads Sanity env vars
  lib/                       client, queries, image URL, safe fetch
components/                  SiteHeader, SiteFooter, Section,
                             FeatureCard, InfoPage, ui/* (shadcn)
lib/                         nav links, seed content, contact schema (Zod),
                             rate limit
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | ESLint |

## Sanity Studio (separate repo)

Schemas and the editor UI live in a **standalone Studio** at `../studio-seed-breathocorrect/`. That project is what editors run with `npm run dev` and deploy to `*.sanity.studio` with `npm run deploy`. This Next.js app only *reads* from Sanity via `sanity/lib/`.

## Notes

- The CMS-driven data layer is wired (`sanity/lib/fetch.ts` calls `sanity/lib/queries.ts`); the marketing pages currently use seed content in `lib/seed-content.ts` so the site is usable without a Sanity project. Swap in `sanityFetch(...)` once a project is provisioned.
- Hero and feature imagery uses gradient placeholders. Replace with licensed/owned imagery before any deploy.
- Vercel CLI is not installed. To enable `vercel env pull` / `vercel deploy` later: `npm i -g vercel`.
