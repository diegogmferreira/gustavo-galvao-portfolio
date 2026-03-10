import Logo from '@/assets/logo-svg';
import { DotsVisualElement } from "@/components/common/dots-element";
import { Button } from '@/components/ui/button';
import { contactData } from '@/constants/contact-data';

export function ContactSection() {
  return (
    <section id="contato" className="max-w-7xl w-full mx-auto px-10 md:space-y-20 space-y-10 mb-16 md:mb-32 max-md:mt-10">
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
            <Button variant="secondary" asChild>
              <a href={contactData.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>

            <Button asChild>
              <a href={contactData.email}>
                E-mail
              </a>
            </Button>

            <Button variant="secondary" asChild>
              <a href={contactData.behance} target="_blank" rel="noopener noreferrer">
                Behance
              </a>
            </Button>

            <Button asChild>
              <a href={contactData.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </Button>
          </div>
        </div>

        <DotsVisualElement className="md:right-16 absolute top-1/4 left-1/2" />
      </div>
    </section>
  )
}