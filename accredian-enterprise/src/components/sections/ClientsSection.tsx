import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { SectionProps } from "@/lib/siteData";

const logos = [
  { name: "Reliance", src: "/reliance.png" },
  { name: "HCL", src: "/hcl.png" },
  { name: "IBM", src: "/ibm.png" },
  { name: "CRIF", src: "/crif.png" },
  { name: "ADP", src: "/adp.png" },
  { name: "Bayer", src: "/bayer.png" },
];

export function ClientsSection(props: SectionProps) {
  void props;

  return (
    <div className="bg-white">
      <Container className="py-14 sm:py-20">
        <SectionHeading
          title="Our Proven Partnerships"
          subtitle="Successful collaborations with the industry’s best"
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((l) => (
            <div
              key={l.name}
              className="flex h-16 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 sm:h-20"
            >
              <Image
                src={l.src}
                alt={`${l.name} logo`}
                width={160}
                height={60}
                className="h-10 w-auto object-contain sm:h-12"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}