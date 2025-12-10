import Masonry from "@/components/common/masonry-collage";
import { Card } from "@/components/ui/card";
import { collageImages, collageImagesObj } from "@/constants/collage-list";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export function MattePaintingCollage() {
  const {
    spiderManPosterMovieImg,
    starWarsSandDesertWebImg,
    spaceBattleImg,
    projectSquirrelImg,
    projectSnowboardImg,
    projectButterImg,
    adStudyJuiceImg,
    projectLocomotiveImg,
    cowAbductionImg,
    riverAlligatorImg,
    adTwixImg,
    sonicBangImg,
    attackTitanImg,
    beerSnowImg,
    projectSnowboardImg2,
    wizardImg,
    spidermanBuildings,
    spidermanBuildings2
  } = collageImages

  return (
    <>
      <Card className="xl:block hidden rounded-4xl p-0 overflow-hidden">
        <div className="grid grid-cols-12 auto-rows-[220px] gap-0">
          <CollageImage src={spiderManPosterMovieImg} className="col-span-3 row-span-2" />
          <CollageImage src={starWarsSandDesertWebImg} className="col-span-6 row-span-1 scale-[118%] ml-12 object-contain" />
          <div className="col-span-3 row-span-1 relative">
            <CollageImage src={spaceBattleImg} className="absolute top-0 right-0 w-[70%] object-contain" />
          </div>

          {/*  */}
          <CollageImage src={projectSquirrelImg} className="col-span-3 row-span-1 scale-90 -mt-22 -ml-6  object-cover z-20" />
          <CollageImage src={projectSnowboardImg} className="col-span-3 row-span-1 scale-[150%] mt-6 ml-8 object-cover" />
          <CollageImage src={projectButterImg} className="col-span-3 row-span-2 mt-10 ml-4 object-cover z-40" />

          {/*  */}
          <CollageImage src={adStudyJuiceImg} className="col-span-4 row-span-1 scale-110 mt-4 object-cover" />
          <CollageImage src={projectLocomotiveImg} className="col-span-5 row-span-1 scale-110 ml-10 mt-5 object-cover z-30" />

          {/*  */}
          <CollageImage src={cowAbductionImg} className="col-span-2 row-span-1 scale-125 ml-4 mt-12 object-cover z-30" />
          <CollageImage src={riverAlligatorImg} className="col-span-4 row-span-1 object-cover mt-5 ml-10 z-50 " />
          <CollageImage src={adTwixImg} className="col-span-3 row-span-1 mt-2 ml-8 object-cover z-40" />
          <CollageImage src={sonicBangImg} className="col-span-3 row-span-1 object-cover z-30 scale-110 -mt-2 -ml-1" />

          {/*  */}
          <CollageImage src={attackTitanImg} className="col-span-5 row-span-2 object-cover z-40 mt-30" />
          <CollageImage src={beerSnowImg} className="col-span-2 row-span-2 object-cover scale-105 z-40 mt-24" />
          <CollageImage src={projectSnowboardImg2} className="col-span-5 row-span-2 object-cover mt-34 z-30" />

          {/*  */}
          <CollageImage src={wizardImg} className="col-span-4 row-span-1 object-cover z-50 scale-[130%] -mt-8" />
          <CollageImage src={spidermanBuildings} className="col-span-4 row-span-1 object-cover z-40 scale-110 -mt-13 ml-6" />
          <CollageImage src={spidermanBuildings2} className="col-span-4 row-span-1 object-cover z-30 scale-[130%] -mt-8 ml-6" />
        </div>
      </Card>

      <div className="xl:hidden block">
        <Masonry
          items={collageImagesObj}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={true}
        />
      </div>
    </>
  )

}

function CollageImage({ src, className }: { src: string, className: string }) {
  return (
    <motion.img
      src={src}
      className={cn("cursor-pointer", className)}
      whileTap={{
        scale: 1.2,
        opacity: 1,
        zIndex: 99,
        filter: "drop-shadow(0 8px 18px rgba(0,0,0,0.35))",
        borderRadius: "16px"
      }}
      initial={{ opacity: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
        duration: 0.25
      }}
    />
  );
}
