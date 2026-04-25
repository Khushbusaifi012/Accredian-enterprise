# Accredian Enterprise Page

Partial clone of the Accredian Enterprise landing page built with Next.js (App Router), reusable components, responsive sections, and a working lead capture flow.

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

### What was manually modified/improved

- Fine-tuned UI spacing, font sizes, and visual hierarchy after previews
- Manually adjusted section content and card layout decisions
- Chose final component structure and naming
- Verified responsiveness and corrected mismatches section by section

