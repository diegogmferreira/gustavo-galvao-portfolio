import { animationFadeInDown, animationStagger } from "@/utils/animations";
import { motion } from "motion/react";
import { ShimmerText } from "./shimmer-text";

interface IProps {
  title: string;
  subtitle: string;
}

export function SectionTitle({ subtitle, title }: IProps) {
  return (
    <motion.div className="flex flex-col items-center justify-center gap-4" variants={animationStagger}>
      <ShimmerText text={title} className="uppercase" />
      {/* <GradientText
        className="text-4xl md:text-5xl font-bold uppercase"
        animationDuration={2}
      > 
        {title}
      </GradientText> */}
      <motion.p className="md:text-2xl text-lg text-foreground" variants={animationFadeInDown}>{subtitle}</motion.p>
    </motion.div>
  )
}