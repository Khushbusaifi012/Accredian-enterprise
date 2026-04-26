# Accredian Enterprise Page

Partial clone of the [Accredian Enterprise](https://enterprise.accredian.com/) landing page built with Next.js (App Router), reusable components, responsive sections, and a working lead capture flow (assignment: Full Stack Developer Intern – Accredian).

## Links

- **Live site (Vercel):** [https://accredian-enterprise-roan.vercel.app/](https://accredian-enterprise-roan.vercel.app/)
- **Source code (GitHub):** [https://github.com/Khushbusaifi012/Accredian-enterprise](https://github.com/Khushbusaifi012/Accredian-enterprise)

## Tech Stack

- Next.js 16 (App Router)
- React 19 (functional components + hooks)
- Tailwind CSS 4
- API routes (`/api/leads`)
- Lead storage via `nedb-promises` (file-based; see [Limitations](#limitations))

## Features Implemented

- Responsive landing page sections
- Navigation + footer
- Reusable section-based component structure
- Enquiry modal with validation
- Lead capture API:
  - `POST /api/leads` to store leads
  - `GET /api/leads` to fetch leads (supports `?limit=`)
- Local persistence: `.data/leads.db` in development (gitignored)

## Project Structure

```text
src/
  app/
    page.tsx
    layout.tsx
    api/leads/route.ts
  components/
    Navbar.tsx
    Footer.tsx
    EnquiryModal.tsx
    sections/        # Hero, Stats, Clients, Edge, Cat, Audience, How it works, FAQ, Testimonials
    ui/              # Button, Container, SectionHeading
  lib/
    siteData.ts
    leadStore.ts
```

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in the browser.

4. Test the lead API: submit the enquiry form, or call `POST /api/leads` and `GET /api/leads` (e.g. `GET /api/leads?limit=20`).

## Approach Taken

- Built the page in modular **section components** for easier maintenance and reuse.
- Aligned copy and structure with the reference site while focusing on **clarity over pixel-perfect** match.
- Used **Tailwind** for layout, spacing, and responsive behavior across mobile and desktop.
- Centralized section order and nav labels in `siteData` so the landing page and menu stay in sync.
- Exposed lead capture through **Next.js Route Handlers** and validated payloads before saving.

## AI Usage

This project was developed with assistance from **AI tools** (as encouraged by the assignment), mainly:

- **Cursor** — scaffolding components, refactors, TypeScript and Tailwind patterns, and quicker iteration on layout and files.
- **ChatGPT (or similar)** — drafting and tightening UI copy, sanity-checking API shape and README wording, and brainstorming structure.

**What was improved manually** — I reviewed and edited all AI-generated code and text: final layout and spacing, component boundaries, which sections appear in the nav, accessibility touches (e.g. labels, semantics), copy tone, and verification that the app runs and deploys on Vercel. AI sped up implementation; design and integration decisions are mine.

## Limitations

- **Lead storage on Vercel (production):** The app uses a **file-based** NeDB store. On serverless (e.g. Vercel), the database path is under ephemeral storage, so **leads are not reliably durable** long term — data can be lost when instances rotate or after deploys. This is a known constraint of this stack, not a feature.
- **Local development:** `GET /api/leads` and `.data/leads.db` are useful for **demo and local testing**; do not treat the production file store as a long-term CRM for real users without changing the backend.

**Strong next step (bonus for production):** replace file storage with a **real database** (e.g. Vercel Postgres, Neon, Supabase, or MongoDB Atlas) and store leads there from the same API route.

## Future Improvements (with more time)

- **Design** — Tighter visual parity with the reference, motion/micro-interactions, imagery optimization, and a more polished mobile menu.
- **Database** — Persistent leads with a hosted DB, optional admin view behind auth, and email notifications on new leads.
- **Testing** — Unit tests for `leadStore` and API validation; Playwright or Cypress for critical user flows.
- **Performance** — Image pipeline audit, bundle analysis, and caching where appropriate; stricter performance budgets for LCP/CLS.
- **Accessibility** — Deeper a11y pass (focus order, ARIA, contrast) and screen-reader testing.

## License / attribution

This is an educational / assignment project. “Accredian” branding and reference content are used for learning purposes; the live reference site is [enterprise.accredian.com](https://enterprise.accredian.com/).
