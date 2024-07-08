'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { AnimatePresence } from 'framer-motion'
import { useSetAtom } from 'jotai/react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@a/ui/accordion'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@a/ui/dropdown-menu'

import type { About, Tab } from '~/data'
import Floating from '~/components/floating'
import Hover from '~/components/hover'
import NavItem from '~/components/nav-item'
import { aboutComponents, tabs } from '~/data'
import { aboutAtom, tabAtom } from '~/store'

const Nav = () => {
  const [active, setActive] = useState<React.ReactNode | null>(null)
  const [hover, setHover] = useState<number | null>(null)
  const setTab = useSetAtom(tabAtom)
  const setAbout = useSetAtom(aboutAtom)
  return (
    <Floating
      className='w-screen px-3 backdrop-blur-md backdrop-brightness-[5] backdrop-contrast-50 transition-all duration-500 hover:shadow-lg dark:border-stone-600 dark:backdrop-brightness-50 dark:backdrop-contrast-100 dark:hover:shadow-xl dark:hover:shadow-stone-800 lg:px-6'
      topClassName='bg-transparent text-white backdrop-filter-none hover:shadow-transparent dark:backdrop-filter-none'>
      <nav
        onMouseLeave={() => setActive(null)}
        className='relative flex items-center justify-between'>
        <Image
          onClick={() => setTab(undefined)}
          src='/logo.svg'
          alt=''
          width={300}
          height={300}
          className='my-3 w-48 cursor-pointer transition-all duration-500 lg:w-72'
        />
        <div className='hidden items-center gap-5 lg:flex'>
          {tabs.map((tab, i) =>
            tab !== 'About' ? (
              <NavItem
                key={i}
                setActive={setActive}
                onClick={() => setTab(tab as Tab)}
                active={active}
                item={tab}
              />
            ) : (
              <NavItem
                key={i}
                setActive={setActive}
                onClick={() => setTab(tab)}
                active={active}
                item={tab}>
                <div className='flex flex-col p-1'>
                  {Object.keys(aboutComponents).map((item, i) => (
                    <div
                      key={i}
                      className='relative text-left'
                      onMouseEnter={() => setHover(i)}
                      onMouseLeave={() => setHover(null)}>
                      <AnimatePresence>
                        {hover === i && (
                          <Hover className='absolute -z-10 size-full rounded-xl bg-stone-200 dark:bg-muted' />
                        )}
                      </AnimatePresence>
                      <p
                        className='cursor-pointer rounded-xl px-3 py-2 text-foreground'
                        onClick={() => setAbout(item as About)}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </NavItem>
            )
          )}
          <Link href='https://www.instagram.com/_otribe_/'>
            <Image src='/ig.svg' alt='' width={32} height={32} />
          </Link>
          <Link href='https://facebook.com/profile.php?id=100063735896326'>
            <Image src='/fb.svg' alt='' width={32} height={32} />
          </Link>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <HamburgerMenuIcon className='mr-3 block size-10 lg:hidden' />
          </DropdownMenuTrigger>
          <DropdownMenuContent className='mt-3 w-screen rounded-none border-none bg-transparent p-3 backdrop-blur-md backdrop-brightness-[0.2]'>
            <Accordion type='single' collapsible>
              <AccordionItem value='about' className='border-none'>
                <AccordionTrigger className='px-2 py-3 text-xl font-normal text-white hover:no-underline'>
                  About
                </AccordionTrigger>
                <AccordionContent className='p-0'>
                  {Object.keys(aboutComponents).map((item, i) => (
                    <DropdownMenuItem
                      className='py-3 pl-8 text-xl text-white'
                      key={i}
                      onClick={() => {
                        setTab('About')
                        setAbout(item as About)
                      }}>
                      {item}
                    </DropdownMenuItem>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {tabs.map(
              (tab, i) =>
                tab !== 'About' && (
                  <DropdownMenuItem
                    className='py-3 text-xl text-white'
                    key={i}
                    onClick={() => setTab(tab)}>
                    {tab}
                  </DropdownMenuItem>
                )
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </Floating>
  )
}

export default Nav
