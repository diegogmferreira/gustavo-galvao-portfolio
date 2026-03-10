import { TestimonialsBentoGrid } from "./testimonials-bento-grid";

export function TestimonialsSection() {

  return (
    <section id="feedback" className="max-w-7xl w-full mx-auto px-10 md:space-y-20 space-y-10">
      <div className="font-medium lg:text-5xl md:text-4xl text-3xl font-inter text-center leading-tight">
        <p className="sr-only"> Os resultados falam por si</p>
        <p className="not-sr-only" aria-hidden>Os <span className="text-primary">resultados</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p className="not-sr-only italic" aria-hidden>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; falam por si.</p>
      </div>

      <TestimonialsBentoGrid />
    </section>
  )
}