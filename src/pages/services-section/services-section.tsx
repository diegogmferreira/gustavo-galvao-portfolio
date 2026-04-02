import { SectionTitle } from "@/components/common/section-title";
import { animationStagger } from "@/utils/animations";
import { motion } from "motion/react";
import { LogoExplanation } from "./logo-creation-explanation";
import { ServiceCard } from "./services-card";

export function ServicesSection() {
  return (
    <motion.section
      id="servicos"
      className="w-full max-w-7xl mx-auto px-10 md:space-y-16 space-y-8"
      variants={animationStagger}
      initial="initial"
      viewport={{ once: true, amount: 0.1 }}
      whileInView="animate"
    >
      <SectionTitle
        title="Serviços"
        subtitle="Identidade Visuais"
      />
      <ServiceCard />
      <LogoExplanation />
    </motion.section>
  )
}