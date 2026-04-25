# Accredian Enterprise Page (Assignment Submission)

Partial clone of the Accredian Enterprise landing page built with Next.js (App Router), reusable components, responsive sections, and a working lead capture flow.

## Live Demo

- Vercel: `<add-your-vercel-url>`

## Repository

- GitHub: `<add-your-github-repo-url>`

## Tech Stack

- Next.js 16 (App Router)
- React 19 (functional components + hooks)
- Tailwind CSS 4
- API routes (`/api/leads`)
- Local persistent storage for leads via `nedb-promises`

## Features Implemented

- Responsive landing page sections
- Navigation + footer with social links
- Reusable section-based component structure
- Enquiry modal with validation-ready fields
- Lead capture API:
  - `POST /api/leads` to store leads
  - `GET /api/leads` to fetch leads (supports `?limit=`)
- Local lead persistence in `.data/leads.db` (ignored from git)

## Project Structure

```text
src/
  app/
    api/leads/route.ts
  components/
    EnquiryModal.tsx
    Footer.tsx
    sections/
      AudienceSection.tsx
      CatSection.tsx
      EdgeSection.tsx
      HowItWorksSection.tsx
      TestimonialsSection.tsx
  lib/
    leadStore.ts
```

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open in browser:

```text
http://localhost:3000
```

4. Test lead API:

- Submit enquiry form from UI, or
- Use API directly:
  - `POST /api/leads`
  - `GET /api/leads`
  - `GET /api/leads?limit=20`

## Approach Taken

- Started with modular section components for maintainability.
- Recreated key homepage sections with assignment-focused visual parity.
- Prioritized responsiveness and clean spacing for mobile + desktop.
- Added reusable UI patterns (card layouts, highlighted headings, icon blocks).
- Implemented a working backend endpoint for lead capture and retrieval.

## AI Usage (Required by Assignment)

AI tools were actively used during development to accelerate implementation and iteration.

### Where AI helped

- Translating reference screenshots into Tailwind/React layouts
- Building/refining reusable section components
- Iterating typography, spacing, and responsive behavior quickly
- Implementing and improving API routes for lead capture
- Updating footer links, social links, and content wiring
- Drafting and improving this README structure

### What was manually modified/improved

- Fine-tuned UI spacing, font sizes, and visual hierarchy after previews
- Manually adjusted section content and card layout decisions
- Chose final component structure and naming
- Verified responsiveness and corrected mismatches section by section
- Controlled what should/should not be tracked in git (`.data/leads.db`)

## Deployment (Vercel)

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy with default Next.js settings
4. Add deployment URL under "Live Demo" above

## Improvements With More Time

- Add stronger form validation (phone/email patterns, inline errors)
- Add admin-protected leads dashboard
- Persist leads to managed DB (Postgres/Mongo) instead of local file
- Add unit/integration tests for API and key UI components
- Improve accessibility (keyboard/ARIA checks and contrast audits)
- Add analytics and event tracking for CTA + form submissions

## Notes

- `.data/` is intentionally ignored in git to avoid committing local lead data.
- Social/contact links in footer are updated as requested.
