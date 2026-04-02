import heroImg from "@/assets/hero-image.webp";
import { DotsVisualElement } from "@/components/common/dots-element";
import { GradientText } from "@/components/common/gradient-text-";
import { TypewriterTitle } from "@/components/common/typewriter-text";
import { Button } from "@/components/ui/button";
import { contactData } from "@/constants/contact-data";
import { cn } from "@/lib/utils";
import { animationFadeInDown, animationStagger } from "@/utils/animations";
import { motion } from "motion/react";

interface HeroSectionProps {
  isPreloaderDone?: boolean;
}

export function HeroSection({ isPreloaderDone = true }: HeroSectionProps) {
  // const [transform, setTransform] = useState(
  //   "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
  // );

  // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   const rect = e.currentTarget.getBoundingClientRect();
  //   const x = e.clientX - rect.left;
  //   const y = e.clientY - rect.top;
  //   const centerX = rect.width / 2;
  //   const centerY = rect.height / 2;
  //   const rotateX = ((y - centerY) / centerY) * 10;
  //   const rotateY = ((x - centerX) / centerX) * -10;
  //   setTransform(
  //     `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1)`
  //   );
  // };

  // const handleMouseLeave = () => {
  //   setTransform(
  //     "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
  //   );
  // };

  return (
    <>
      <motion.section
        id="sobre"
        className="relative flex items-center justify-center overflow-hidden"
        variants={animationStagger}
        initial="initial"
        animate={isPreloaderDone ? "animate" : "initial"}
      // viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={animationFadeInDown}
          className={cn(
            "relative z-10  rounded-2xl overflow-hidden ",
            "max-md:absolute"
          )}
          variants={animationFadeInDown}
        >
          <div className={cn("relative h-full w-full", "max-md:opacity-20")}>
            <img
              src={heroImg}
              alt="Gustavo Galvão - Designer e Artista Visual"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"
            />
          </div>
        </motion.div>

        <motion.div className="relative z-10 lg:max-w-2xl md:max-w-lg" variants={animationStagger}>
          <DotsVisualElement className="max-md:hidden" />

          <motion.div
            className={cn(
              "max-md:mx-10 flex flex-col pt-20 md:pt-64 md:mt-0 lg:ml-16 text-left space-y-5",
              "2xl:-translate-x-56 xl:-translate-x-40 lg:-translate-x-32 "
            )}
            variants={animationStagger}
          >
            <h1 className="sr-only">Gustavo Galvão | Designer & Artista Visual</h1>
            <motion.div
              variants={animationFadeInDown}
            >
              <GradientText
                className="text-3xl md:text-4xl font-bold"
                animationDuration={2}
              >
                SOBRE:
              </GradientText>
            </motion.div>
            <motion.span className="text-neutral-300 leading-relaxed text-justify " variants={animationFadeInDown}>
              Me chamo <TypewriterTitle sequences={[{ text: "Gustavo Galvão", deleteAfter: false }]} />,
              sou designer desde 2005, com experiência em projetos para grandes empresas e diferentes segmentos do mercado.
              Minha atuação envolve criação de identidades visuais, desenvolvimento de campanhas publicitárias, social media,
              design de embalagens e soluções criativas em todas as áreas do design. O design é minha paixão: acredito no
              poder da criação para transformar ideias em experiências visuais que conectam pessoas e marcas. Cada projeto
              é uma oportunidade de unir técnica, sensibilidade e propósito, sempre em busca de resultados que inspirem e
              façam a diferença.
            </motion.span>
            <div className="flex gap-4 max-md:justify-center" >
              <motion.div variants={animationFadeInDown}>
                <Button asChild variant="secondary">
                  <a href={contactData.behance} target="_blank" rel="noopener noreferrer"> Behance </a>
                </Button>
              </motion.div>
              <motion.div variants={animationFadeInDown}>
                <Button asChild>
                  <a href={contactData.instagram} target="_blank" rel="noopener noreferrer"> Instagram </a>
                </Button>
              </motion.div>
            </div>
          </motion.div >
        </motion.div >
      </motion.section >



      {/* <div className="absolute inset-0 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 opacity-10">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="rounded-xl bg-neutral-700/20" />
          ))}
        </div> 

       ---- Card com efeito 3D ---- 
        <div
          // onMouseMove={handleMouseMove}
          // onMouseLeave={handleMouseLeave}
          // style={{
          //   transform,
          //   transition: "transform 0.2s ease, box-shadow 0.2s ease",
          //   // boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)",
          // }}
          className={cn(
            "relative z-10  rounded-2xl overflow-hidden ",
            "w-[963px]",
            // "w-[320px] h-[320px] md:w-[400px] md:h-[400px]"
          )}
        >
          <img
            src={heroImg}
            alt="Foto do Gustavo Galvão"
            className="object-cover w-full h-full"
          />
        </div>
        

      <section className='flex min-h-[calc(100dvh-4rem)] flex-1 flex-col justify-between gap-12 overflow-x-hidden pt-8 sm:gap-16 sm:pt-16 lg:gap-24 lg:pt-24'>
        <div className='mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:px-8'>
          <div className='bg-muted flex items-center gap-2.5 rounded-full border px-3 py-2'>
            <span className='text-muted-foreground'>Solution for client-facing businesses</span>
          </div>

          <h1 className='text-3xl leading-[1.29167] font-bold text-balance sm:text-4xl lg:text-5xl'>
            Sizzling Summer Delights
            <br />
            <span className='relative'>
              Effortless
              <svg
                width='223'
                height='12'
                viewBox='0 0 223 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-x-0 bottom-0 w-full translate-y-1/2 max-sm:hidden'
              >
                <path
                  d='M1.11716 10.428C39.7835 4.97282 75.9074 2.70494 114.894 1.98894C143.706 1.45983 175.684 0.313587 204.212 3.31596C209.925 3.60546 215.144 4.59884 221.535 5.74551'
                  stroke='url(#paint0_linear_10365_68643)'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_10365_68643'
                    x1='18.8541'
                    y1='3.72033'
                    x2='42.6487'
                    y2='66.6308'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='var(--primary)' />
                    <stop offset='1' stopColor='var(--primary-foreground)' />
                  </linearGradient>
                </defs>
              </svg>
            </span>{' '}
            Recipes for Parties!
          </h1>

          <p className='text-muted-foreground'>
            Dive into a world of flavor this summer with our collection of Sizzling Summer Delights!
            <br />
            From refreshing appetizers to delightful desserts
          </p>

          <Button size='lg' asChild>
            <a href='#'>Try It Now</a>
          </Button>
        </div>

        <img
          src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-19.png'
          alt='Dishes'
          className='min-h-67 w-full object-cover'
        />
      </section>
      */}
    </>
  );
}
