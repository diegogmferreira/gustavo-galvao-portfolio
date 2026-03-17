import { animationFadeInDown, animationFadeInLeft, animationFadeInRight, animationStagger } from "@/utils/animations";
import { motion } from "framer-motion";
import { TestimonialsBentoGrid } from "./testimonials-bento-grid";

export function TestimonialsSection() {

  return (
    <motion.section
      id="feedback"
      className="max-w-7xl w-full mx-auto px-10 md:space-y-20 space-y-10"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={animationStagger}
    >
      <motion.div className="font-medium lg:text-5xl md:text-4xl text-3xl font-inter text-center leading-tight">
        <p className="sr-only"> Os resultados falam por si</p>
        <motion.p className="not-sr-only" aria-hidden variants={animationFadeInRight}>Os <span className="text-primary">resultados</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</motion.p>
        <motion.p className="not-sr-only italic" aria-hidden variants={animationFadeInLeft}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; falam por si.</motion.p>
      </motion.div>

      <TestimonialsBentoGrid />
    </motion.section>
  )
}