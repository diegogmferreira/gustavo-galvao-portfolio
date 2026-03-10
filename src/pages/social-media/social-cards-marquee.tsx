
import { Card, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import {
  Marquee,
  MarqueeContent,
  MarqueeEdge,
  MarqueeItem,
} from "@/components/ui/marquee";
import { cardSocialMediaList } from "@/constants/card-social-media-list";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export function SocialCardsMarquee() {
  const SPEED = 25;
  const GAP = "1.5rem"
  const formattedCards = cardSocialMediaList.map((card, index) => ({
    ...card,
    id: card.name + card.url + index,
  }));

  return (
    <div className="w-full flex flex-col group">
      <Marquee
        aria-label="Social media posts showcase"
        pauseOnHover
        pauseOnKeyboard
        speed={SPEED}
        side="left"
        gap={GAP}
      >
        <MarqueeContent>
          {formattedCards.map((card) => (
            <MarqueeItem key={card.id} asChild>
              <motion.div
                className="flex-shrink-0 flex items-center justify-center bg-background/50 backdrop-blur-sm py-10"
                whileHover={{
                  scale: 1.10,
                  boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)",
                  borderColor: "rgba(var(--primary), 0.3)",
                  transition: {
                    ease: "easeOut",
                    duration: .2
                  }
                }}
                whileTap={{
                  scale: 0.95,
                  transition: {
                    ease: "easeOut",
                    duration: .2
                  }
                }}
              >
                <Card className={cn("bg-[#040404] py-0 gap-0 rounded-3xl")}>
                  <CardContent className="px-0 ">
                    <img src={card.url} alt={card.name} className="max-h-96 rounded-tl-3xl rounded-tr-3xl" />
                  </CardContent>

                  <CardFooter className="py-5">
                    <CardDescription className="text-sm truncate">{card.name}</CardDescription>
                  </CardFooter>
                </Card>
              </motion.div>
            </MarqueeItem>
          ))}
        </MarqueeContent>
        <MarqueeEdge side="left" />
        <MarqueeEdge side="right" />
      </Marquee>

      <Marquee
        aria-label="Social media posts showcase"
        pauseOnHover
        pauseOnKeyboard
        speed={SPEED}
        side="right"
        gap={GAP}
      >
        <MarqueeContent>
          {formattedCards.toReversed().map((card) => (
            <MarqueeItem key={card.name} asChild>
              <motion.div
                // key={`${direction}-${index}`}
                className="flex-shrink-0 flex items-center justify-center bg-background/50 backdrop-blur-sm py-10"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)",
                  borderColor: "rgba(var(--primary), 0.3)",
                }}
              >
                <Card className={cn("bg-[#040404] py-0 gap-0 rounded-3xl")}>
                  <CardContent className="px-0 ">
                    <img src={card.url} alt={card.name} className="max-h-96 rounded-tl-3xl rounded-tr-3xl" />
                  </CardContent>

                  <CardFooter className="py-5">
                    <CardDescription className="text-sm truncate">{card.name}</CardDescription>
                  </CardFooter>
                </Card>
              </motion.div>
            </MarqueeItem>
          ))}
        </MarqueeContent>
        <MarqueeEdge side="left" />
        <MarqueeEdge side="right" />
      </Marquee>
    </div>
  );
}