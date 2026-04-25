import type { ComponentType } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { EdgeSection } from "@/components/sections/EdgeSection";
import { CatSection } from "@/components/sections/CatSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export type SiteSectionId =
  | "home"
  | "stats"
  | "clients"
  | "edge"
  | "cat"
  | "audience"
  | "how"
  | "faqs"
  | "testimonials";

export type SectionProps = {
  onEnquire: () => void;
};

type SectionDef = {
  id: SiteSectionId;
  navLabel: string;
  Component: ComponentType<SectionProps>;
};

export const sections: SectionDef[] = [
  { id: "home", navLabel: "Home", Component: HeroSection },
  { id: "stats", navLabel: "Stats", Component: StatsSection },
  { id: "clients", navLabel: "Clients", Component: ClientsSection },
  { id: "edge", navLabel: "Accredian Edge", Component: EdgeSection },
  { id: "cat", navLabel: "CAT", Component: CatSection },
  { id: "audience", navLabel: "", Component: AudienceSection },
  { id: "how", navLabel: "How It Works", Component: HowItWorksSection },
  { id: "faqs", navLabel: "FAQs", Component: FaqSection },
  { id: "testimonials", navLabel: "Testimonials", Component: TestimonialsSection },
];

export const navSections: SectionDef[] = sections.filter((s) => s.navLabel);

