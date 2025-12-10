import Logo from '@/assets/logo-svg';
import { DotsVisualElement } from "@/components/common/dots-element";
import { Button } from '@/components/ui/button';


export function ContactSection() {
  return (
    <section className="max-w-7xl w-full mx-auto px-10 space-y-20 mb-32">
      <div className="flex w-full gap-20 justify-between">
        <div className='max-w-[50%] space-y-8'>
          <Logo />

          <p className='text-justify'> Obrigado por visitar meu portfólio! <br /> Aqui você encontra um pouco da minha trajetória como designer, com projetos publicitários, identidades visuais e criações para social media que unem criatividade, estratégia e impacto visual. <br /> Se você gostou do meu trabalho e quer conversar sobre novas ideias ou projetos, é só me chamar no WhatsApp. <br /> Será um prazer transformar sua ideia em algo único!
          </p>

          <div className='flex gap-4'>
            <Button variant="secondary">
              WhatsApp
            </Button>

            <Button >
              E-mail
            </Button>

            <Button variant="secondary">
              Behance
            </Button>

            <Button>
              Instagram
            </Button>
          </div>
        </div>

        <DotsVisualElement className="relative right-16" />
      </div>
    </section>
  )
}