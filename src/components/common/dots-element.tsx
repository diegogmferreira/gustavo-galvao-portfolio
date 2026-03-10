import { cn } from "@/lib/utils"
import { animationFadeInDown, animationStagger } from "@/utils/animations"
import { motion, type HTMLMotionProps } from "motion/react"

export function DotsVisualElement({ className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={cn("absolute flex flex-col items-center justify-center top-0 right-56 space-y-6 scale-75", className)}
      {...props}
      variants={animationStagger}
    >
      <motion.div className="w-[61px] h-[61px] rounded-full bg-[#1f1f1f]" variants={animationFadeInDown} />
      <motion.div className="w-[45px] h-[45px] rounded-full bg-[#2d2d2d]" variants={animationFadeInDown} />
      <motion.div className="w-[27px] h-[27px] rounded-full border border-[#2f2f2f]" variants={animationFadeInDown} />
      <motion.div className="w-4 h-4 rounded-full bg-[#353535]" variants={animationFadeInDown} />
    </motion.div>
  )
}