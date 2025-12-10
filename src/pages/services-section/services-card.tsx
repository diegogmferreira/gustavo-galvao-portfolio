import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cardList } from "@/constants/card-logo-list";
import { cn } from "@/lib/utils";

export function ServiceCard() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      {cardList.map((card) => (
        <Card key={card.title} className={cn("bg-[#040404] py-0 gap-0 rounded-2xl", { "cursor-pointer": card.externalLink })}>
          <CardHeader className="flex items-center justify-between py-6">
            <CardTitle>{card.title}</CardTitle>
            {/* <CardAction className="text-primary">Future dropdown menu here</CardAction> */}
          </CardHeader>

          <CardContent className="px-0">
            <img src={card.image} aria-hidden />
          </CardContent>

          <CardFooter className="py-2">
            <CardDescription className="text-sm truncate" title={card.description}>{card.description}</CardDescription>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}