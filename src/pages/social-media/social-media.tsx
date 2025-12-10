import socialMediaLibertyImg from "@/assets/social-media/social-media-liberty.svg"
import { Card, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { SocialCardsMarquee } from "./social-cards-marquee"

export function SocialMediaService() {
  return (
    <section className="max-w-[1920px] w-full mx-auto px-10 space-y-20">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex py-10 items-center justify-between gap-10">
          <div className="flex flex-col">
            <p className="uppercase text-white font-semibold text-7xl leading-8">SOCIAL</p>
            <p className={cn(
              "uppercase font-extrabold text-9xl",
              "md:block hidden font-extrabold text-transparent",
              "bg-clip-text pointer-events-none select-none",
              "[-webkit-text-stroke:2px_#DE0147]"
            )}>
              MEDIA
            </p>
            <p className="text-2xl">Modelos de posts de algumas <br /> empresas de diversos segmentos</p>
          </div>

          <Card className={cn("bg-[#040404] py-0 gap-0 rounded-4xl")}>
            <CardContent className="px-0 ">
              <img src={socialMediaLibertyImg} aria-hidden className="rounded-tl-4xl rounded-tr-4xl" />
            </CardContent>

            <CardFooter className="py-6">
              <CardDescription className="text-sm truncate">"Post para empresa de internet"</CardDescription>
            </CardFooter>
          </Card>
        </div >
      </div>

      <SocialCardsMarquee />
    </section>

  )
}