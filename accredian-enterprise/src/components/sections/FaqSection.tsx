"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import type { SectionProps } from "@/lib/siteData";

type TabId = "course" | "delivery" | "misc";

type Faq = { q: string; a: string };

export function FaqSection({ onEnquire }: SectionProps) {
  const data = useMemo<Record<TabId, Faq[]>>(
    () => ({
      course: [
        {
          q: "What types of corporate training programs does Accredian offer?",
          a: "We offer structured programs across leadership, data, product, operations, and emerging domains—tailored to your organization.",
        },
        {
          q: "What domain specializations are available?",
          a: "Programs span product, Gen‑AI, tech & data, operations, fintech, and digital enterprise tracks.",
        },
      ],
      delivery: [
        {
          q: "Do you support online and offline delivery?",
          a: "Yes—delivery can be online, offline, or hybrid depending on your needs.",
        },
        {
          q: "How do you measure impact?",
          a: "Assessments, projects, and reporting help track progress and outcomes over time.",
        },
      ],
      misc: [
        {
          q: "Can the curriculum be customized?",
          a: "Yes—content, duration, and difficulty can be tailored to match roles and goals.",
        },
        {
          q: "How do we get started?",
          a: "Use the enquiry form and share your requirements. We’ll connect with you to propose a plan.",
        },
      ],
    }),
    [],
  );

  const [tab, setTab] = useState<TabId>("course");
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = data[tab];

  return (
    <div className="bg-white">
      <Container className="py-14 sm:py-20">
        <SectionHeading title="Frequently Asked Questions" />

        <div className="mt-10 grid gap-8 lg:grid-cols-[260px_1fr]">
          <div className="space-y-2">
            {[
              { id: "course" as const, label: "About the Course" },
              { id: "delivery" as const, label: "About the Delivery" },
              { id: "misc" as const, label: "Miscellaneous" },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  setTab(t.id);
                  setOpenIdx(0);
                }}
                className={`w-full rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors ${
                  tab === t.id
                    ? "border-blue-200 bg-blue-50 text-blue-800"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {faqs.map((f, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={f.q}
                  className="rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    onClick={() => setOpenIdx((v) => (v === idx ? null : idx))}
                    aria-expanded={isOpen}
                  >
                    <div className="text-sm font-semibold text-slate-900">
                      {f.q}
                    </div>
                    <div className="text-slate-500">{isOpen ? "−" : "+"}</div>
                  </button>
                  {isOpen ? (
                    <div className="px-5 pb-5 text-sm leading-6 text-slate-600">
                      {f.a}
                    </div>
                  ) : null}
                </div>
              );
            })}

            <div className="pt-2">
              <Button onClick={onEnquire} className="h-11 px-8">
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

