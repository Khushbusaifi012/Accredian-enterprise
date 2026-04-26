"use client";

import { useEffect, useState } from "react";
import type { SiteSectionId } from "@/lib/siteData";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type NavItem = {
  id: SiteSectionId;
  label: string;
  href: string;
};

export function Navbar({
  items,
  onEnquire,
  onNavigate,
}: {
  items: NavItem[];
  onEnquire: () => void;
  onNavigate: (id: SiteSectionId) => void;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2 font-semibold tracking-tight"
          aria-label="Go to home"
        >
          <span className="text-base text-blue-700 sm:text-lg">
            Accredian-Enterprise
          </span>
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button className="hidden md:inline-flex" onClick={onEnquire}>
            Enquire Now
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md ring-1 ring-slate-200 hover:bg-slate-50 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-xl leading-none">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-slate-200 md:hidden">
          <Container className="py-3">
            <div className="flex flex-col gap-1">
              {items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    onNavigate(item.id);
                    setOpen(false);
                  }}
                  className="rounded-md px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <Button className="w-full" onClick={onEnquire}>
                  Enquire Now
                </Button>
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

