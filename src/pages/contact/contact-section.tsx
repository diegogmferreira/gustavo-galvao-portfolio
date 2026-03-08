import Logo from '@/assets/logo-svg';
import { DotsVisualElement } from "@/components/common/dots-element";
import { Button } from '@/components/ui/button';

export function ContactSection() {
  return (
    <section className="max-w-7xl w-full mx-auto px-10 md:space-y-20 space-y-10 mb-16 md:mb-32 max-md:mt-10">
      <div className="relative flex w-full gap-20 justify-between">
        <div className='md:max-w-[50%] w-full md:space-y-8 space-y-6 z-10'>
          <Logo />

          <p className='text-justify'>
            Obrigado por visitar meu portfólio! <br />
            Aqui você encontra um pouco da minha trajetória como designer, com projetos publicitários,
            identidades visuais e criações para social media que unem criatividade, estratégia e impacto visual. <br />
            Se você gostou do meu trabalho e quer conversar sobre novas ideias ou projetos, é só me chamar no WhatsApp. <br />
            Será um prazer transformar sua ideia em algo único!
          </p>

          <div className='flex md:flex-row flex-wrap gap-4'>
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

        <DotsVisualElement className="md:right-16 absolute top-1/4 left-1/2" />
      </div>
    </section>
  )
}