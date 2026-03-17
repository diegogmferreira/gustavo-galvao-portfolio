import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cardList } from "@/constants/card-logo-list";
import { cn } from "@/lib/utils";
import { animationFadeInDown, animationStagger } from "@/utils/animations";
import { motion } from "framer-motion";

export function ServiceCard() {
  return (
    <motion.div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4"
      variants={animationStagger}
    >
      {cardList.map((card) => (
        <motion.div
          whileHover={{ scale: 1.05 }}
          variants={animationFadeInDown}
        >
          <Card
            key={card.title}
            className={cn(
              "bg-[#040404] py-0 gap-0 rounded-2xl",
              { "cursor-pointer": card.externalLink }
            )}
            onClick={() => {
              if (card.externalLink) {
                window.open(card.externalLink, "_blank");
              }
            }}
          >
            <CardHeader className="flex items-center justify-between py-6">
              <CardTitle>{card.title}</CardTitle>
              {/* <CardAction className="text-primary">Future dropdown menu here</CardAction> */}
            </CardHeader>

            <CardContent className="px-0">
              <img src={card.image} alt={card.title} />
            </CardContent>

            <CardFooter className="py-2">
              <CardDescription className="text-sm truncate" title={card.description}>{card.description}</CardDescription>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}