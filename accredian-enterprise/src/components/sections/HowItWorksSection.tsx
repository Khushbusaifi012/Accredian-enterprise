import { Container } from "@/components/ui/Container";
import type { SectionProps } from "@/lib/siteData";

const steps = [
  {
    n: 1,
    title: "Skill Gap Analysis",
    body: "Identify key skill gaps.",
    icon: "analysis",
  },
  {
    n: 2,
    title: "Customized Training Plan",
    body: "Build a focused learning roadmap.",
    icon: "plan",
  },
  {
    n: 3,
    title: "Flexible Program Delivery",
    body: "Deliver training in the best format.",
    icon: "delivery",
  },
];

function StepIcon({ type }: { type: (typeof steps)[number]["icon"] }) {
  if (type === "analysis") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white" aria-hidden="true">
        <path d="M4 18h16M7 15v-3m5 3V9m5 6V6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="m6.5 11.5 3-3 2.5 1.8 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "plan") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white" aria-hidden="true">
        <rect x="4" y="5" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 20h6M12 17v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white" aria-hidden="true">
      <rect x="4" y="5" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 20h6M12 17v3M9 9h6M12 9v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function HowItWorksSection(props: SectionProps) {
  void props;
  return (
    <div className="bg-white">
      <Container className="py-14 sm:py-20">
        <div className="text-center">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
            <span className="text-slate-900">How We </span>
            <span className="text-blue-600">Deliver Results</span>
            <span className="text-slate-900"> That Matter?</span>
          </h2>
          <p className="mt-2 text-xs leading-5 text-slate-700 sm:text-sm">
            A 3-step path to <span className="text-blue-600">skill development</span>
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, index) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-slate-300 bg-slate-100 p-6 text-center shadow-sm"
            >
              <div className="absolute left-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-300 bg-white text-xs font-bold text-slate-700">
                {s.n}
              </div>
              {index > 0 ? (
                <span className="absolute -left-5 top-1/2 hidden h-24 w-1 -translate-y-1/2 rounded-full bg-blue-500 md:block" />
              ) : null}
              {index < steps.length - 1 ? (
                <span className="absolute -right-5 top-1/2 hidden h-24 w-1 -translate-y-1/2 rounded-full bg-blue-500 md:block" />
              ) : null}

              <div className="mx-auto mt-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 shadow-sm">
                <StepIcon type={s.icon} />
              </div>
              <div className="mt-5 text-lg font-bold text-slate-900">
                {s.title}
              </div>
              <div className="mt-1 text-sm leading-6 text-slate-700">
                {s.body}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

