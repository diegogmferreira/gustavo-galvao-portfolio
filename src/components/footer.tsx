import { BehanceLogo } from '@/assets/behance-svg';
import { InstagramLogo } from '@/assets/instagram-svg';
import Logo from '@/assets/logo-svg';
import { WhatsappLogo } from '@/assets/whatsapp-svg';
import { contactData } from '@/constants/contact-data';
import { animationFadeInUp, animationStagger } from '@/utils/animations';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <motion.footer
      className="bg-[linear-gradient(268deg,#DE0147_44.5%,#5E001E_109.19%)] overflow-hidden"
      variants={animationStagger}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className='max-w-7xl w-full mx-auto py-6 px-10 flex justify-between'>
        <motion.div variants={animationFadeInUp}>
          <Logo className='w-24' />
        </motion.div>

        <div className='flex gap-8 items-center justify-center'>
          <motion.a href={contactData.instagram} target="_blank" rel="noopener noreferrer" variants={animationFadeInUp}>
            <InstagramLogo className='w-6' />
          </motion.a>
          <motion.a href={contactData.whatsapp} target="_blank" rel="noopener noreferrer" variants={animationFadeInUp}>
            <WhatsappLogo className='w-6' />
          </motion.a>
          <motion.a href={contactData.behance} target="_blank" rel="noopener noreferrer" variants={animationFadeInUp}>
            <BehanceLogo className='w-8' />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  )
}