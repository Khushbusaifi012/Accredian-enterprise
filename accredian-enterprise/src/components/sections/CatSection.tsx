import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { SectionProps } from "@/lib/siteData";
import Image from "next/image";

const LightIcon = ({ className = "h-8 w-8" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M9.5 18h5m-4.25 3h3.5M12 3a6.5 6.5 0 0 0-4 11.62c.66.49 1 1.13 1 1.88V17h6v-.5c0-.75.34-1.4 1-1.88A6.5 6.5 0 0 0 12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BrainIcon = ({ className = "h-8 w-8" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M9 6a3 3 0 0 0-5 2v8a3 3 0 0 0 5 2m6-12a3 3 0 0 1 5 2v8a3 3 0 0 1-5 2M9 6a3 3 0 0 1 6 0m-6 12a3 3 0 0 0 6 0m-3-12v12m-4-6h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const UsersIcon = ({ className = "h-8 w-8" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M8.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3.5 19a5 5 0 0 1 10 0m2.5 0a4 4 0 0 1 7 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BarsIcon = ({ className = "h-8 w-8" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M6 17V11m6 6V7m6 10V4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const GearIcon = ({ className = "h-8 w-8" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="m9.6 4.5.5 1.7a6.8 6.8 0 0 1 3.8 0l.5-1.7 2.4 1.4-.8 1.7a6.9 6.9 0 0 1 1.9 3.3l1.8.2v2.8l-1.8.2a6.9 6.9 0 0 1-1.9 3.3l.8 1.7-2.4 1.4-.5-1.7a6.8 6.8 0 0 1-3.8 0l-.5 1.7-2.4-1.4.8-1.7a6.9 6.9 0 0 1-1.9-3.3l-1.8-.2v-2.8l1.8-.2a6.9 6.9 0 0 1 1.9-3.3l-.8-1.7 2.4-1.4ZM12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GlobeIcon = ({ className = "h-8 w-8" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M3 12h18m-9-9c2.5 2.5 2.5 15.5 0 18m0-18c-2.5 2.5-2.5 15.5 0 18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);

const CardIcon = ({ className = "h-8 w-8" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect x="3.5" y="6" width="17" height="12" rx="2" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="10" cy="12" r="1.2" fill="currentColor"/>
    <path d="M14 12h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const ConceptIcon = ({ className = "h-12 w-12" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M9 18h6m-5 3h4M12 3a5 5 0 0 0-3 9v2h6v-2a5 5 0 0 0-3-9Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 1v1.5M5.5 4.5l1 1M18.5 4.5l-1 1M3.5 11H2m20 0h-1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const ApplicationIcon = ({ className = "h-12 w-12" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect x="11" y="4" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M14 7h4M14 9h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="8" cy="15" r="3.2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 11v1.2M8 17.8V19M4 15h1.2M10.8 15H12M5.3 12.3l.8.8M10 17l.8.8M10 13l.8-.8M5.3 17.7l.8-.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const ToolsIcon = ({ className = "h-12 w-12" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="9" cy="14.5" r="3.5" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="16.5" cy="10.5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M9 9.5v1M9 18.5v1M4 14.5h1M13 14.5h1M6 11.5l.7.7M11.3 16.8l.7.7M11.3 12.2l.7-.7M6 17.5l.7-.7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const domains = [
  { title: "Product & Innovation Hub", Icon: LightIcon },
  { title: "Gen‑AI Mastery", Icon: BrainIcon },
  { title: "Leadership Elevation", Icon: UsersIcon },
  { title: "Tech & Data Insights", Icon: BarsIcon },
  { title: "Operations Excellence", Icon: GearIcon },
  { title: "Digital Enterprise", Icon: GlobeIcon },
  { title: "Fintech Innovation Lab", Icon: CardIcon },
] as const;

const segmentations = [
  {
    title: "Program Specific",
    subtitle: "Certificate, Executive, Post Graduate Courses",
    image: "/program.jpg",
  },
  {
    title: "Industry Specific",
    subtitle: "IT, Healthcare, Retail, Finance",
    image: "/industry.jpg",
  },
  {
    title: "Topic Specific",
    subtitle: "ML, Design, Analytics, Cloud",
    image: "/topic.jpg",
  },
  {
    title: "Level Specific",
    subtitle: "Senior Leaders, Mid‑Career, Freshers",
    image: "/level.jpg",
  },
];

export function CatSection(props: SectionProps) {
  void props;
  return (
    <div className="bg-white">
      <Container className="py-14 sm:py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            <span className="text-slate-900">Our </span>
            <span className="text-blue-600">Domain Expertise</span>
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-700 sm:text-base">
            <span className="font-semibold text-blue-600">Specialized Programs </span>
            Designed to Fuel Innovation
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {domains.map((d, index) => (
            <div
              key={d.title}
              className={`flex min-h-24 flex-col items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-5 text-center shadow-[0_3px_10px_rgba(15,23,42,0.08)] ${
                index === domains.length - 1 ? "md:col-start-2" : ""
              }`}
            >
              <d.Icon className="h-8 w-8 text-blue-600" />
              <div className="mt-2 text-base font-semibold text-slate-900">{d.title}</div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <SectionHeading
            title="Tailored Course Segmentation"
            subtitle="Explore custom‑fit courses designed to address every professional focus"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {segmentations.map((s) => (
              <div
                key={s.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative h-28">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="text-sm font-bold text-blue-700">
                    {s.title}
                  </div>
                  <div className="mt-1 text-sm leading-6 text-slate-600">
                    {s.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-slate-100 p-8 sm:p-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              <span className="text-slate-900">The </span>
              <span className="text-blue-600">CAT Framework</span>
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-700 sm:text-base">
              Our Proven Approach to <span className="text-blue-600">Learning Excellence</span>
            </p>
          </div>

          <div className="relative mt-12 hidden md:block">
            <div className="relative z-10 grid grid-cols-3 gap-8 px-10">
              {[
                {
                  title: "Concept",
                  body: "Foundational knowledge for deep subject understanding.",
                  Icon: ConceptIcon,
                },
                {
                  title: "Application",
                  body: "Practical implementation through real-world scenarios.",
                  Icon: ApplicationIcon,
                },
                {
                  title: "Tools",
                  body: "Resources and techniques for effective skill mastery.",
                  Icon: ToolsIcon,
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <item.Icon className="mx-auto h-12 w-12 text-blue-600" />
                  <div className="mt-3 text-4xl font-extrabold text-slate-900">
                    {item.title}
                  </div>
                  <p className="mx-auto mt-2 max-w-[280px] text-base leading-7 text-slate-700">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:hidden">
            {[
              {
                title: "Concept",
                body: "Foundational knowledge for deep subject understanding.",
                Icon: ConceptIcon,
              },
              {
                title: "Application",
                body: "Practical implementation through real-world scenarios.",
                Icon: ApplicationIcon,
              },
              {
                title: "Tools",
                body: "Resources and techniques for effective skill mastery.",
                Icon: ToolsIcon,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border-2 border-blue-500 bg-white px-5 py-6 text-center"
              >
                <item.Icon className="mx-auto h-10 w-10 text-blue-600" />
                <div className="mt-3 text-xl font-bold text-slate-900">{item.title}</div>
                <p className="mt-1 text-sm leading-6 text-slate-700">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

