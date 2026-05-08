import { Container } from "@/components/ui/Container";
import type { SectionProps } from "@/lib/siteData";
import Image from "next/image";

export function EdgeSection(props: SectionProps) {
  void props;

  const timeline = [
    {
      title: "Tailored Solutions",
      body: "Programs customized to your organization’s goals and challenges.",
      src: "/guidance.jpg",
      side: "top",
    },
    {
      title: "Expert Guidance",
      body: "Learn from industry leaders with real‑world success.",
      src: "/guidance.jpg",
      side: "bottom",
    },
    {
      title: "Innovative Framework",
      body: "Proprietary methods for impactful, application‑driven results.",
      src: "/mentorship.jpg",
      side: "top",
    },
    {
      title: "Advanced Technology",
      body: "State‑of‑the‑art LMS for seamless learning experiences.",
      src: "/advanced-technology.jpg",
      side: "bottom",
    },
    {
      title: "Diverse Offerings",
      body: "Courses across industries, skill levels, and emerging fields.",
      src: "/assessments.jpg",
      side: "top",
    },
    {
      title: "Proven Impact",
      body: "Trusted by leading organizations for measurable ROI.",
      src: "/proven-impact.jpg",
      side: "bottom",
    },
    {
      title: "Flexible Delivery",
      body: "Online and offline options tailored to your needs.",
      src: "/reporting.jpg",
      side: "top",
    },
  ] as const;

  return (
    <div className="bg-white">
      <Container className="py-14 sm:py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            <span className="text-blue-600">The Accredian</span>{" "}
            <span className="text-slate-900">Edge</span>
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
            Key Aspects of <span className="text-blue-600">Our Strategic Training</span>
          </p>
        </div>

        <div className="mt-12 hidden md:block">
          <div className="relative mx-auto max-w-6xl">
            <div className="flex items-start justify-between gap-5 px-2">
              {timeline.map((t, index) => (
                <div key={t.title} className="relative w-[130px] text-center">
                  {t.side === "top" ? (
                    <div className="min-h-[100px] text-left">
                      <div className="text-base font-extrabold leading-6 text-slate-900">
                        {t.title}
                      </div>
                      <div className="mt-1 text-base leading-6 text-slate-700">
                        {t.body}
                      </div>
                    </div>
                  ) : (
                    <div className="min-h-[100px]" />
                  )}

                  <div className="relative mx-auto mt-5 flex h-20 w-20 items-center justify-center">
                    {t.side === "top" ? (
                      <span className="absolute left-1/2 top-[-30px] h-8 w-px -translate-x-1/2 bg-sky-300" />
                    ) : (
                      <span className="absolute bottom-[-30px] left-1/2 h-8 w-px -translate-x-1/2 bg-sky-300" />
                    )}
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-300/80" />
                    <div className="absolute inset-[8px] rounded-full bg-white shadow-sm ring-2 ring-sky-100" />
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white">
                      <Image
                        src={t.src}
                        alt={t.title}
                        width={48}
                        height={48}
                        className="h-12 w-12 object-contain"
                      />
                    </div>
                  </div>
                  {index < timeline.length - 1 ? (
                    <div className="pointer-events-none absolute right-[-20px] top-[136px] z-20 flex items-center gap-1 text-slate-300">
                      <span className="block h-2.5 w-2.5 rotate-45 border-r-2 border-t-2 border-current" />
                      <span className="block h-2.5 w-2.5 rotate-45 border-r-2 border-t-2 border-current" />
                    </div>
                  ) : null}

                  {t.side === "bottom" ? (
                    <div className="mt-5 min-h-[100px] text-left">
                      <div className="text-base font-extrabold leading-6 text-slate-900">
                        {t.title}
                      </div>
                      <div className="mt-1 text-base leading-6 text-slate-700">
                        {t.body}
                      </div>
                    </div>
                  ) : (
                    <div className="mt-5 min-h-[100px]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:hidden">
          {timeline.map((t) => (
            <div
              key={t.title}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-slate-200">
                <Image
                  src={t.src}
                  alt={t.title}
                  width={44}
                  height={44}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div>
                <div className="text-base font-extrabold text-slate-900">
                  {t.title}
                </div>
                <div className="mt-1 text-base leading-7 text-slate-600">
                  {t.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

