'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence } from 'framer-motion'
import { useSetAtom } from 'jotai/react'

import type { About, Tab } from '~/data'
import Floating from '~/components/floating'
import Hover from '~/components/hover'
import NavItem from '~/components/nav-item'
import ThemeToggle from '~/components/theme-toggle'
import { aboutComponents, tabs } from '~/data'
import { aboutAtom, tabAtom } from '~/store'

const Nav = () => {
  const [active, setActive] = useState<React.ReactNode | null>(null)
  const [hover, setHover] = useState<number | null>(null)
  const setTab = useSetAtom(tabAtom)
  const setAbout = useSetAtom(aboutAtom)
  return (
    <Floating className='top-2 mx-auto max-w-fit rounded-full border px-2 backdrop-blur-md backdrop-brightness-[5] backdrop-contrast-50 transition-all duration-500 hover:shadow-lg dark:border-stone-600 dark:backdrop-brightness-50 dark:backdrop-contrast-100 dark:hover:shadow-xl dark:hover:shadow-stone-800'>
      <nav onMouseLeave={() => setActive(null)} className='relative flex items-center gap-32'>
        <Image
          onClick={() => setTab(undefined)}
          src='/brand.svg'
          alt=''
          width={150}
          height={150}
          className='ml-3 cursor-pointer invert transition-all duration-500 dark:invert-0'
        />
        <div className='flex'>
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
                        className='cursor-pointer rounded-xl px-3 py-2'
                        onClick={() => setAbout(item as About)}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </NavItem>
            )
          )}
        </div>
        <ThemeToggle />
      </nav>
    </Floating>
  )
}

export default Nav
