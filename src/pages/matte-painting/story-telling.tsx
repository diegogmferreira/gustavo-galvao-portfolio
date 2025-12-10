import cowboyImg from "@/assets/cowboy.png"
import shaolinImg from "@/assets/shaolin.png"
import { Badge } from "@/components/ui/badge"

export function StoryTelling() {
  return (
    <div className="flex flex-col mt-40 space-y-20">
      <div className="grid grid-cols-2 w-full gap-8">
        <div className="flex flex-col space-y-4">
          <Badge className="font-semibold md:text-2xl text-xl px-16 py-1 rounded-2xl">OLD WEST</Badge>

          <p className="text-sm leading-relaxed text-justify">
            Este projeto nasceu da ideia de transformar uma simples paisagem em uma narrativa visual poderosa. A proposta era criar uma cena que contasse uma história sem precisar de palavras — um cowboy solitário, guiado apenas pela luz da lua e da sua lanterna, observando um trem ao longe, símbolo de novos caminhos e oportunidades. Cada detalhe foi pensado para transmitir atmosfera, emoção e movimento: a iluminação noturna, a profundidade do cânion e a composição cinematográfica foram criadas para levar o espectador a um universo de aventura e introspecção. O resultado é uma peça que une técnica e narrativa, transformando imagem em experiência.
          </p>
        </div>
        <img src={cowboyImg} alt="" aria-hidden />
      </div>


      <div className="grid grid-cols-2 w-full gap-8">
        <img src={shaolinImg} alt="" aria-hidden  />

        <div className="flex flex-col space-y-4">
          <Badge className="font-semibold md:text-2xl text-xl px-16 py-1 rounded-2xl">SHAOLIN</Badge>
          <p className="text-sm leading-relaxed text-justify">
            A criação desta cena nasceu da fusão entre tradição e contemplação. Imaginei um vilarejo aos pés de montanhas imponentes, onde monges caminham em silêncio, carregando consigo a serenidade milenar da cultura oriental. A atmosfera foi construída com contrastes: o peso das montanhas nevadas contra a leveza da neblina, a rigidez da arquitetura contra a fluidez das vestes. Cada elemento visual foi pensado para transmitir calma, introspecção e espiritualidade. Mais que uma imagem, este projeto busca transportar o espectador para um estado de contemplação, onde o silêncio se torna narrativa.
          </p>
        </div>

      </div>
    </div>
  )
}

{/* <span className="font-semibold md:text-4xl text-2xl bg-primary rounded-2xl px-10 py-3">{children}</span> */ }
