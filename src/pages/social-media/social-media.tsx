import socialMediaLibertyImg from "@/assets/social-media/social-media-liberty.webp"
import { Card, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { animationFadeInUp, animationStagger, cardFillAnimation, invertedAnimationStagger, titleStrokeAnimation } from "@/utils/animations"
import { motion } from "framer-motion"
import { SocialCardsMarquee } from "./social-cards-marquee"

export function SocialMediaService() {
  return (
    <motion.section
      className="max-w-[1920px] w-full mx-auto px-10 md:space-y-20"
      variants={animationStagger}
      initial="initial"
      whileInView="animate"
      viewport={{ amount: 0.2, once: true }}
    >
      <div className="max-w-7xl mx-auto px-10">
        <motion.div className="flex flex-col md:flex-row py-10 items-center justify-between gap-10" variants={animationStagger}>
          <motion.div className="flex flex-col" variants={invertedAnimationStagger}>
            <motion.p
              className="uppercase text-white font-semibold md:text-7xl text-6xl leading-8"
              variants={animationFadeInUp}
            >
              SOCIAL
            </motion.p>
            <motion.p
              className={cn(
                "uppercase font-extrabold md:text-9xl text-8xl",
                "font-extrabold text-transparent",
                "bg-clip-text pointer-events-none select-none",
                "[-webkit-text-stroke:2px_#DE0147]"
              )}
              variants={titleStrokeAnimation}
            >
              MEDIA
            </motion.p>
            <motion.p className="max-md:hidden text-2xl" variants={titleStrokeAnimation}>Modelos de posts de algumas <br /> empresas de diversos segmentos</motion.p>
            <motion.p className="md:hidden text-xl text-center" variants={titleStrokeAnimation}>Modelos de posts de algumas empresas de diversos segmentos</motion.p>
          </motion.div>

          <motion.div variants={cardFillAnimation}>
            <Card className={cn("bg-[#040404] py-0 gap-0 rounded-4xl")}>
              <CardContent className="px-0 ">
                <img src={socialMediaLibertyImg} alt="Post para empresa de internet" className="rounded-tl-4xl rounded-tr-4xl" />
              </CardContent>

              <CardFooter className="py-6">
                <CardDescription className="text-sm truncate">"Post para empresa de internet"</CardDescription>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div >
      </div>

      <SocialCardsMarquee />
    </motion.section>

  )
}