'use client'

import Image from 'next/image'
import { useAtomValue } from 'jotai/react'

import { cn } from '@a/ui'
import { Button } from '@a/ui/button'

import { tabs } from '~/data'
import { tabAtom } from '~/store'
import About from './about'
import Contact from './contact'
import Home from './home'
import Services from './services'
import Testimonials from './testimonials'

const Page = () => {
  const tab = useAtomValue(tabAtom)
  return (
    <>
      <Image
        className={cn(
          'w-screen bg-black object-cover transition-all duration-1000',
          tab ? 'h-[490px] lg:h-[536px]' : 'h-[585px] lg:h-[830px]',
          tab && tab !== 'Testimonials' && 'brightness-[0.36]'
        )}
        src={tab ? (tab === 'Testimonials' ? '/leaf3.png' : '/leaf2.jpg') : '/leaf1.png'}
        alt=''
        width={2000}
        height={2000}
      />
      <div className='absolute left-1/2 top-52 flex -translate-x-1/2 font-bold text-white lg:top-60'>
        {tabs.map((t, i) => (
          <p
            key={i}
            className={cn(
              'my-6 text-[0] transition-all duration-700',
              tab === t && 'mx-12 my-0 text-6xl'
            )}>
            {t}
          </p>
        ))}
      </div>
      {!tab && <Home />}
      {tab === 'About' && <About />}
      {tab === 'Testimonials' && <Testimonials />}
      {tab === 'Services' && <Services />}
      {tab === 'Contact' && <Contact />}
      {tab && tab !== 'Contact' && (
        <div className='flex justify-center'>
          <Button className='my-10 h-14 rounded-xl border bg-[#587c5c] px-5 text-xl lg:h-24 lg:rounded-2xl lg:px-12 lg:text-4xl'>
            Contact O-tribe today
          </Button>
        </div>
      )}
    </>
  )
}

export default Page
