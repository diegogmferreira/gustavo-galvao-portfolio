import { MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '@/components/ui/navigation-menu'

import { cn } from '@/lib/utils'

import Logo from '@/assets/logo-svg'
import { contactData } from '@/constants/contact-data'
import { useEffect, useState } from 'react'

export type NavigationSection = {
  title: string
  href: string
}

type HeaderProps = {
  navigationData: NavigationSection[]
  className?: string
}

export function Header({ navigationData, className }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])


  return (
    <header className={cn(
      'bg-background sticky top-0 z-[100] h-16 transition-all px-6 lg:px-8',
      { "border-b bg-background/75 shadow-md backdrop-blur": scrolled },
      className
    )}>
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between gap-6'>
        <a href='#' className='w-24'>
          <Logo />
        </a>

        {/* Navigation */}
        <NavigationMenu className='max-md:hidden'>
          <NavigationMenuList className='flex-wrap justify-start gap-0'>
            {navigationData.map(navItem => (
              <NavigationMenuItem key={navItem.title}>
                <NavigationMenuLink
                  href={navItem.href}
                  className='text-muted-foreground hover:text-primary px-3 py-1.5 text-base! font-regular hover:bg-transparent'
                >
                  {navItem.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Navbar Buttons */}
        <div className='flex gap-5 max-md:hidden'>
          <Button className='rounded-lg max-md:hidden' asChild variant="secondary">
            <a href={contactData.email}>Email</a>
          </Button>
          <Button className='rounded-lg max-md:hidden' asChild>
            <a href={contactData.whatsapp}>WhatsApp</a>
          </Button>
        </div>

        {/* Navigation for small screens */}
        <div className='flex gap-3 md:hidden'>
          <Button className='rounded-lg' asChild>
            <a href={contactData.whatsapp}>WhatsApp</a>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' size='icon'>
                <MenuIcon />
                <span className='sr-only'>Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56 z-100' align='end'>
              {navigationData.map((item, index) => (
                <DropdownMenuItem key={index}>
                  <a href={item.href}>{item.title}</a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
