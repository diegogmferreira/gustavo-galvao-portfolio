import casaDoNeonImg from '@/assets/testimonials/casa-do-neon.svg'
import policlinImg from '@/assets/testimonials/policlin-logo.svg'
import runningImg from '@/assets/testimonials/running-logo.svg'
import testimonial1Img from '@/assets/testimonials/testimonial-1.webp'
import testimonial2Img from '@/assets/testimonials/testimonial-2.webp'
import testimonial3Img from '@/assets/testimonials/testimonial-3.webp'
import testimonial4Img from '@/assets/testimonials/testimonial-4.webp'
import xisDoBolaImg from '@/assets/testimonials/xis-do-bola-logo.svg'
import { cn } from '@/lib/utils'
import { animationFadeInDown, animationStagger } from '@/utils/animations'
import { motion, type HTMLMotionProps } from 'framer-motion'

export function TestimonialsBentoGrid() {
  return (
    <motion.div
      className='grid grid-cols-2 md:grid-cols-4 gap-5 '
      variants={animationStagger}
    >
      <TestimonialBentoCard>
        <img src={testimonial1Img} alt="Depoimento de cliente" />
      </TestimonialBentoCard>
      <TestimonialBentoCard className="p-6 bg-black">
        <img src={casaDoNeonImg} alt="Logo Casa do Neon" />
      </TestimonialBentoCard>
      <TestimonialBentoCard className='bg-emerald-300 col-span-2 p-4'>
        <div className='flex flex-col justify-between h-full text-background'>
          <span className='md:text-lg text-sm font-normal'>
            Ficou simplesmente sensacional,
            do jeitinho que eu queria, até
            melhor, parabéns pelo
            excelente trabalho! 👏👏👏
          </span>

          <div className=''>
            <hr className='mb-3 border-background/50' />
            <p className='md:text-lg text-sm'>Rogério Ventriglio</p>
            <p className='md:text-sm text-xs leading-snug'>Empresário</p>
          </div>
        </div>
      </TestimonialBentoCard>


      <TestimonialBentoCard className="p-6 bg-black">
        <img src={policlinImg} alt="Logo Policlin" />
      </TestimonialBentoCard>
      <TestimonialBentoCard>
        <img src={testimonial2Img} alt="Depoimento de cliente" />
      </TestimonialBentoCard>
      <TestimonialBentoCard>
        <img src={testimonial3Img} alt="Depoimento de cliente" />
      </TestimonialBentoCard>
      <TestimonialBentoCard className="p-6 bg-black">
        <img src={runningImg} alt="Logo Running" />
      </TestimonialBentoCard>

      <TestimonialBentoCard className='bg-primary col-span-2 p-4'>
        <div className='flex flex-col justify-between h-full'>
          <span className='md:text-lg text-sm font-normal'>
            Profissional incrível! Sempre entrega artes de
            altíssima qualidade, alinhadas exatamente com
            o que eu precisava! <br />
            Virei fã do seu trabalho.
          </span>

          <div className=''>
            <hr className='mb-3 border-white/50' />
            <p className='md:text-lg text-sm'>Karine</p>
            <p className='md:text-sm text-xs leading-snug'>Empresária</p>
          </div>
        </div>
      </TestimonialBentoCard>
      <TestimonialBentoCard className="p-6 bg-black">
        <img src={xisDoBolaImg} alt="Logo Xis do Bola" />
      </TestimonialBentoCard>
      <TestimonialBentoCard>
        <img src={testimonial4Img} alt="Depoimento de cliente" />
      </TestimonialBentoCard>
    </motion.div>
  )
}

function TestimonialBentoCard({ className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={cn('flex items-center justify-center rounded-[20px] border shadow-sm', className)}
      variants={animationFadeInDown}
      {...props}
    />
  )
}