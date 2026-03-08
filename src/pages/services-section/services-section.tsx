import { SectionTitle } from "@/components/common/section-title";
import { LogoExplanation } from "./logo-creation-explanation";
import { ServiceCard } from "./services-card";

export function ServicesSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-10 md:space-y-16 space-y-8">
      <SectionTitle
        title="Serviços"
        subtitle="Identidade Visuais"
      />
      <ServiceCard />
      <LogoExplanation />
    </section>
  )
}