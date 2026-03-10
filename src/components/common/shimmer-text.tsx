import { cn } from "@/lib/utils";
import { animationFadeInDown } from "@/utils/animations";
import { motion } from "motion/react";

interface Text_01Props {
  text: string;
  className?: string;
}

export function ShimmerText({
  text,
  className,
}: Text_01Props) {
  return (
    <motion.div className="flex items-center justify-center" variants={animationFadeInDown}>
      <motion.div
        className="relative overflow-hidden"
        initial={{ opacity: 0, y: 0, }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className={cn(
            "md:text-5xl text-2xl font-semibold bg-gradient-to-r from-primary via-neutral-400 to-primary bg-[length:200%_100%] bg-clip-text text-transparent",
            className
          )}
          animate={{
            backgroundPosition: ["200% center", "-200% center"],
          }}
          transition={{
            duration: 2.5,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          {text}
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}
