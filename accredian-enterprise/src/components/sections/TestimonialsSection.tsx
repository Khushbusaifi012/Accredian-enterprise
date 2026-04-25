import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import type { SectionProps } from "@/lib/siteData";
import Image from "next/image";

const testimonials = [
  {
    company: "ADP",
    logo: "/adp.png",
    quote:
      "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality.",
  },
  {
    company: "Bayer",
    logo: "/bayer.png",
    quote:
      "Accredian’s commitment to excellence is unmatched. They consistently deliver reliable support and high‑quality service.",
  },
];

export function TestimonialsSection({ onEnquire }: SectionProps) {
  return (
    <div className="bg-white">
      <Container className="py-14 sm:py-20">
        <SectionHeading
          title="Testimonials from Our Partners"
          subtitle="What our clients are saying"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.company}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="relative h-10 w-28">
                <Image
                  src={t.logo}
                  alt={`${t.company} logo`}
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                “{t.quote}”
              </p>
            </div>
          ))}
        </div>

        <div className="relative mt-10 overflow-hidden rounded-2xl bg-[#1f73de] text-white shadow-sm">
          <div className="pointer-events-none absolute -right-8 -top-16 h-64 w-64 rounded-full border-[28px] border-blue-400/25" />
          <div className="pointer-events-none absolute right-16 -bottom-28 h-72 w-72 rounded-full border-[28px] border-blue-300/20" />

          <div className="relative flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/90 shadow-[0_4px_10px_rgba(2,6,23,0.2)]">
                <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-blue-600" aria-hidden="true">
                  <path d="M5 13v4a2 2 0 0 0 2 2h1v-8H7a2 2 0 0 0-2 2Zm14 0v4a2 2 0 0 1-2 2h-1v-8h1a2 2 0 0 1 2 2Z" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M5 13a7 7 0 0 1 14 0M9 19h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className="text-base font-extrabold tracking-tight no-underline sm:text-xl">
                  Want to Learn More About Our Training Solutions?
                </div>
                <div className="mt-1 text-xs font-medium text-blue-100 sm:text-sm">
                  Get Expert Guidance for Your Team’s Success!
                </div>
              </div>
            </div>
            <Button
              variant="secondary"
              onClick={onEnquire}
              className="h-11 min-w-36 rounded-xl border border-blue-100/60 bg-white px-7 text-base font-semibold text-blue-600 shadow-sm hover:bg-blue-50"
            >
              Contact Us ›
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

