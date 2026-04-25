import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import type { SectionProps } from "@/lib/siteData";
import Image from "next/image";

export function HeroSection({ onEnquire }: SectionProps) {
  return (
    <div className="bg-white">
      <Container className="py-10 sm:py-14">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-10 shadow-sm sm:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl">
                Next‑Gen{" "}
                <span className="text-blue-700">Expertise</span> For Your{" "}
                <span className="text-blue-700">Enterprise</span>
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                Cultivate high‑performance teams through expert learning.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-700">
                {[
                  "Tailored Solutions",
                  "Industry Insights",
                  "Expert Guidance",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      ✓
                    </span>
                    <span className="font-medium">{t}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button onClick={onEnquire} className="h-11 px-6">
                  Enquire Now
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-slate-200">
                <Image
                  src="/hero-meeting.png"
                  alt="Team discussion in office"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 via-transparent to-transparent" />
                <div className="absolute left-6 bottom-6 rounded-xl bg-white/85 px-4 py-3 shadow-sm ring-1 ring-slate-200 backdrop-blur">
                  <div className="text-xs font-semibold text-slate-900">
                    Enterprise training
                  </div>
                  <div className="mt-1 text-xs text-slate-600">
                    Designed for measurable impact
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

