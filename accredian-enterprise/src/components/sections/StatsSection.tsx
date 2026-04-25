import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { SectionProps } from "@/lib/siteData";

const stats = [
  {
    value: "10K+",
    label: "Professionals Trained For Exceptional Career Success",
  },
  { value: "200+", label: "Sessions Delivered With Unmatched Learning Excellence" },
  { value: "5K+", label: "Active Learners Engaged In Dynamic Courses" },
];

export function StatsSection(props: SectionProps) {
  void props;
  return (
    <div className="bg-white">
      <Container className="py-14 sm:py-20">
        <SectionHeading
          title="Our Track Record"
          subtitle="The Numbers Behind Our Success"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.value}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto inline-flex rounded-full bg-blue-50 px-4 py-1 text-sm font-bold text-blue-700">
                {s.value}
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">{s.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

