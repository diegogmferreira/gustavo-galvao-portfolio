import cowboyImg from "@/assets/cowboy.webp"
import shaolinImg from "@/assets/shaolin.webp"
import { Badge } from "@/components/ui/badge"
import { animationFadeInUp, animationStagger } from "@/utils/animations"
import { motion } from "framer-motion"

export function StoryTelling() {
  return (
    <motion.div
      className="flex flex-col mt-40 space-y-20"
      variants={animationStagger}
      initial="initial"
      viewport={{ once: true, amount: 0.2 }}
      whileInView="animate"
    >
      <motion.div className="grid md:grid-cols-2 w-full gap-8">
        <div className="flex flex-col space-y-4">
          <Badge
            className="font-semibold md:text-2xl text-xl px-16 py-1 rounded-2xl"
            variants={animationFadeInUp}
          >
            OLD WEST
          </Badge>

          <motion.p className="text-sm leading-relaxed text-justify" variants={animationFadeInUp}>
            Este projeto nasceu da ideia de transformar uma simples paisagem em uma narrativa visual poderosa. A proposta era criar uma cena que contasse uma história sem precisar de palavras — um cowboy solitário, guiado apenas pela luz da lua e da sua lanterna, observando um trem ao longe, símbolo de novos caminhos e oportunidades. Cada detalhe foi pensado para transmitir atmosfera, emoção e movimento: a iluminação noturna, a profundidade do cânion e a composição cinematográfica foram criadas para levar o espectador a um universo de aventura e introspecção. O resultado é uma peça que une técnica e narrativa, transformando imagem em experiência.
          </motion.p>
        </div>
        <motion.img src={cowboyImg} alt="Cowboy no Velho Oeste" variants={animationFadeInUp} />
      </motion.div>


      <motion.div className="grid md:grid-cols-2 grid-cols-1 w-full gap-8">
        <motion.img src={shaolinImg} alt="Templo Shaolin nas montanhas" className="max-md:hidden" variants={animationFadeInUp} />

        <motion.div className="flex flex-col space-y-4">
          <Badge className="font-semibold md:text-2xl text-xl px-16 py-1 rounded-2xl" variants={animationFadeInUp}>SHAOLIN</Badge>
          <motion.p className="text-sm leading-relaxed text-justify" variants={animationFadeInUp}>
            A criação desta cena nasceu da fusão entre tradição e contemplação. Imaginei um vilarejo aos pés de montanhas imponentes, onde monges caminham em silêncio, carregando consigo a serenidade milenar da cultura oriental. A atmosfera foi construída com contrastes: o peso das montanhas nevadas contra a leveza da neblina, a rigidez da arquitetura contra a fluidez das vestes. Cada elemento visual foi pensado para transmitir calma, introspecção e espiritualidade. Mais que uma imagem, este projeto busca transportar o espectador para um estado de contemplação, onde o silêncio se torna narrativa.
          </motion.p>
        </motion.div>

        <motion.img src={shaolinImg} alt="Templo Shaolin nas montanhas" className="md:hidden" variants={animationFadeInUp} />
      </motion.div>
    </motion.div>
  )
}