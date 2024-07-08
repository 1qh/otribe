import { useAtom, useAtomValue } from 'jotai/react'

import { cn } from '@a/ui'

import type { About as AboutType } from '~/data'
import Reveal from '~/components/reveal'
import { aboutComponents } from '~/data'
import { aboutAtom, tabAtom } from '~/store'

const About = () => {
  const tab = useAtomValue(tabAtom)
  const [about, setAbout] = useAtom(aboutAtom)
  return (
    <>
      <div className='absolute left-1/2 top-72 flex w-screen -translate-x-1/2 lg:top-[350px]'>
        <div className='mx-auto flex max-w-screen-2xl flex-wrap justify-center gap-5 px-10 lg:px-0'>
          {tab === 'About' &&
            Object.keys(aboutComponents).map((item, i) => (
              <button
                key={i}
                className={cn(
                  'rounded-xl border border-white px-3 py-1.5 text-base font-medium text-white transition-all duration-300 hover:border-transparent hover:backdrop-blur-lg hover:backdrop-brightness-200 hover:backdrop-contrast-75 lg:text-xl',
                  about === item &&
                    'border-transparent backdrop-blur-lg backdrop-brightness-200 backdrop-contrast-75'
                )}
                onClick={() => setAbout(item as AboutType)}>
                {item}
              </button>
            ))}
        </div>
      </div>
      <div className='mx-auto max-w-screen-2xl py-12 lg:py-24'>
        <div className='px-4 md:px-6'>
          <div className='grid gap-10'>
            <div className='flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:px-12 lg:text-left'>
              <Reveal>
                <h2 className='-mt-2 text-4xl font-bold leading-tight tracking-tighter text-[#587c5c] sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight'>
                  {about}
                </h2>
              </Reveal>
            </div>
            <div className='flex items-center justify-center overflow-hidden lg:px-12'>
              {aboutComponents[about]}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
