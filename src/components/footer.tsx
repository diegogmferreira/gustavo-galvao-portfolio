import { BehanceLogo } from '@/assets/behance-svg';
import { InstagramLogo } from '@/assets/instagram-svg';
import Logo from '@/assets/logo-svg';
import { WhatsappLogo } from '@/assets/whatsapp-svg';
import { contactData } from '@/constants/contact-data';

export function Footer() {
  return (
    <footer className="bg-[linear-gradient(268deg,#DE0147_44.5%,#5E001E_109.19%)]">
      <div className='max-w-7xl w-full mx-auto py-6 px-10 flex justify-between'>
        <Logo className='w-24' />

        <div className='flex gap-8 items-center justify-center'>
          <a href={contactData.instagram} target="_blank" rel="noopener noreferrer">
            <InstagramLogo className='w-6' />
          </a>
          <a href={contactData.whatsapp} target="_blank" rel="noopener noreferrer">
            <WhatsappLogo className='w-6'/>
          </a>
          <a href={contactData.behance} target="_blank" rel="noopener noreferrer">
            <BehanceLogo className='w-8' />
          </a>
        </div>
      </div>
    </footer>
  )
}