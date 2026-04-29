# Accredian Enterprise Page

Partial clone of the [Accredian Enterprise](https://enterprise.accredian.com/) landing page built with Next.js (App Router), reusable components, responsive sections, and a working lead capture flow.

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

## Limitations

- **Lead storage on Vercel (production):** The app uses a **file-based** NeDB store. On serverless (e.g. Vercel), the database path is under ephemeral storage, so **leads are not reliably durable** long term — data can be lost when instances rotate or after deploys. This is a known constraint of this stack, not a feature.
- **Local development:** `GET /api/leads` and `.data/leads.db` are useful for **demo and local testing**; do not treat the production file store as a long-term CRM for real users without changing the backend.

**Strong next step (bonus for production):** replace file storage with a **real database** (e.g. Vercel Postgres, Neon, Supabase, or MongoDB Atlas) and store leads there from the same API route.
