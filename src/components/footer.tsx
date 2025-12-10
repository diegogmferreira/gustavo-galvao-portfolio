import { BehanceLogo } from '@/assets/behance-svg';
import { InstagramLogo } from '@/assets/instagram-svg';
import Logo from '@/assets/logo-svg';
import { WhatsappLogo } from '@/assets/whatsapp-svg';

export function Footer() {
  return (
    <footer className="bg-[linear-gradient(268deg,#DE0147_44.5%,#5E001E_109.19%)]">
      <div className='max-w-7xl w-full mx-auto py-6 px-10 flex justify-between'>
        <Logo className='w-24' />

        <div className='flex gap-8 items-center justify-center'>
          <InstagramLogo className='w-6' />
          <WhatsappLogo className='w-6'/>
          <BehanceLogo className='w-8' />

        </div>
      </div>
    </footer>
  )
}