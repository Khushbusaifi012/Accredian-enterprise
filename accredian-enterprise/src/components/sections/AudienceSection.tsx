import { Container } from "@/components/ui/Container";
import type { SectionProps } from "@/lib/siteData";
import Image from "next/image";

const audience = [
  {
    title: "Tech Professionals",
    body: "Enhance expertise, embrace tech, drive innovation.",
    icon: "monitor-check",
  },
  {
    title: "Non‑Tech Professionals",
    body: "Adapt digitally, collaborate in tech environments.",
    icon: "monitor-x",
  },
  {
    title: "Emerging Professionals",
    body: "Develop powerful skills for rapid career growth.",
    icon: "graduation",
  },
  {
    title: "Senior Professionals",
    body: "Strengthen leadership, enhance strategic decisions.",
    icon: "briefcase",
  },
];

function AudienceIcon({ type }: { type: (typeof audience)[number]["icon"] }) {
  if (type === "monitor-check") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 text-white" aria-hidden="true">
        <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8.5 10.5 10.8 13l4.7-4.8M9 20h6m-8 0h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "monitor-x") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 text-white" aria-hidden="true">
        <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="m9.2 8.8 5.6 5.6m0-5.6-5.6 5.6M9 20h6m-8 0h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "graduation") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 text-white" aria-hidden="true">
        <path d="m2.5 9.5 9.5-4 9.5 4-9.5 4-9.5-4Zm3.5 2.3v4.2c2.2 2 9.8 2 12 0v-4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 text-white" aria-hidden="true">
      <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 12h18" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function AudienceSection(props: SectionProps) {
  void props;
  return (
    <div className="bg-white">
      <Container className="py-14 sm:py-20">
        <div className="overflow-hidden rounded-2xl bg-blue-700 text-white shadow-sm">
          <div className="grid gap-8 p-8 md:grid-cols-[1fr_1.2fr] md:p-10">
            <div>
              <div className="text-sm font-semibold text-blue-100">
                Who Should Join?
              </div>
              <div className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Strategic Skill Enhancement
              </div>
              <div className="relative mt-5 h-40 w-full max-w-xs overflow-hidden rounded-2xl border border-white/20">
                <Image
                  src="/technology.jpg"
                  alt="Professionals collaborating on technology strategy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {audience.map((a) => (
                <div key={a.title} className="rounded-xl bg-white/10 p-5">
                  <AudienceIcon type={a.icon} />
                  <div className="mt-2 text-sm font-bold">{a.title}</div>
                  <div className="mt-2 text-sm leading-6 text-blue-100">
                    {a.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

