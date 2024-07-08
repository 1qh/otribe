'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronsDown, Github, Menu } from 'lucide-react'

import { Button } from '@a/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@a/ui/navigation-menu'
import { Separator } from '@a/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@a/ui/sheet'

import ThemeToggle from '~/components/theme-toggle'

interface RouteProps {
  href: string
  label: string
}

interface FeatureProps {
  title: string
  description: string
}

const routeList: RouteProps[] = [
  {
    href: '#testimonials',
    label: 'Testimonials'
  },
  {
    href: '#team',
    label: 'Team'
  },
  {
    href: '#contact',
    label: 'Contact'
  },
  {
    href: '#faq',
    label: 'FAQ'
  }
]

const featureList: FeatureProps[] = [
  {
    title: 'Showcase Your Value ',
    description: 'Highlight how your product solves user problems.'
  },
  {
    title: 'Build Trust',
    description: 'Leverages social proof elements to establish trust and credibility.'
  },
  {
    title: 'Capture Leads',
    description: 'Make your lead capture form visually appealing and strategically.'
  }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className='sticky top-5 z-40 mx-auto flex w-[90%] items-center justify-between rounded-2xl border border-secondary bg-card/15 p-2 shadow-inner md:w-[70%] lg:w-3/4 lg:max-w-screen-xl'>
      <Link href='/' className='flex items-center text-lg font-bold'>
        <ChevronsDown className='mr-2 size-9 rounded-lg border border-secondary bg-gradient-to-tr from-primary via-primary/70 to-primary text-white' />
        Shadcn
      </Link>
      {/* <!-- Mobile --> */}
      <div className='flex items-center lg:hidden'>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu onClick={() => setIsOpen(!isOpen)} className='cursor-pointer lg:hidden' />
          </SheetTrigger>

          <SheetContent
            side='left'
            className='flex flex-col justify-between rounded-r-2xl border-secondary bg-card'>
            <div>
              <SheetHeader className='mb-4 ml-4'>
                <SheetTitle className='flex items-center'>
                  <Link href='/' className='flex items-center'>
                    <ChevronsDown className='mr-2 size-9 rounded-lg border border-secondary bg-gradient-to-tr from-primary via-primary/70 to-primary text-white' />
                    Shadcn
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className='flex flex-col gap-2'>
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant='ghost'
                    className='justify-start text-base'>
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className='flex-col items-start justify-start sm:flex-col'>
              <Separator className='mb-2' />

              <ThemeToggle />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className='mx-auto hidden lg:block'>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='bg-card text-base'>Features</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className='grid w-[600px] grid-cols-2 gap-5 p-4'>
                <Image
                  src='https://avatars.githubusercontent.com/u/75042455?v=4'
                  alt='RadixLogo'
                  className='size-full rounded-md object-cover'
                  width={600}
                  height={600}
                />
                <ul className='flex flex-col gap-2'>
                  {featureList.map(({ title, description }) => (
                    <li key={title} className='rounded-md p-3 text-sm hover:bg-muted'>
                      <p className='mb-1 font-semibold leading-none text-foreground'>{title}</p>
                      <p className='line-clamp-2 text-muted-foreground'>{description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className='px-2 text-base'>
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className='hidden lg:flex'>
        <ThemeToggle />

        <Button asChild size='sm' variant='ghost' aria-label='View on GitHub'>
          <Link
            aria-label='View on GitHub'
            href='https://github.com/nobruf/shadcn-landing-page.git'
            target='_blank'>
            <Github className='size-5' />
          </Link>
        </Button>
      </div>
    </header>
  )
}

export default Navbar