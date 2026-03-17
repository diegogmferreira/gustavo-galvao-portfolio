import { SectionTitle } from "@/components/common/section-title";
import { animationStagger } from "@/utils/animations";
import { motion } from "framer-motion";
import { MattePaintingCollage } from "./matte-painting-collage";
import { StoryTelling } from "./story-telling";

export function MattePaintingSection() {

  return (
    <motion.section
      className="w-full max-w-7xl mx-auto px-10 space-y-16"
      variants={animationStagger}
      initial="initial"
      viewport={{ once: true, amount: 0.1 }}
      whileInView="animate"
    >
      <SectionTitle
        title="Matte Painting"
        subtitle="Trabalhos Publicitários"
      />

      <MattePaintingCollage />
      <StoryTelling />
    </motion.section>
  )
}