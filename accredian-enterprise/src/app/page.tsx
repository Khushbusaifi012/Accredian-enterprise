"use client";

import { useMemo, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EnquiryModal } from "@/components/EnquiryModal";
import { navSections, sections, type SiteSectionId } from "@/lib/siteData";

export default function Home() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const navItems = useMemo(
    () =>
      navSections.map((s) => ({
        id: s.id,
        label: s.navLabel,
        href: `#${s.id}`,
      })),
    [],
  );

  const openEnquiry = () => setIsEnquiryOpen(true);
  const closeEnquiry = () => setIsEnquiryOpen(false);

  const onNav = (id: SiteSectionId) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-dvh bg-white text-slate-900">
      <Navbar items={navItems} onEnquire={openEnquiry} onNavigate={onNav} />

      <main>
        {sections.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-24">
            <s.Component onEnquire={openEnquiry} />
          </section>
        ))}
      </main>

      <Footer onEnquire={openEnquiry} />

      {isEnquiryOpen ? <EnquiryModal open onClose={closeEnquiry} /> : null}
    </div>
  );
}
