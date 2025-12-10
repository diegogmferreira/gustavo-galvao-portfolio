import { SectionTitle } from "@/components/common/section-title";
import { MattePaintingCollage } from "./matte-painting-collage";
import { StoryTelling } from "./story-telling";

export function MattePaintingSection() {

  return (
    <section className="w-full max-w-7xl mx-auto px-10 space-y-16">
      <SectionTitle
        title="Matte Painting"
        subtitle="Trabalhos Publicitários"
      />

      <MattePaintingCollage />
      <StoryTelling />
    </section>
  )
}