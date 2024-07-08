import { useState } from 'react'
import Image from 'next/image'

import { Button } from '@a/ui/button'
import { Card } from '@a/ui/card'
import { Drawer, DrawerContent, DrawerTrigger } from '@a/ui/drawer'

import type { TestimonialCategory } from '~/data'
import { testimonialCategories, testimonials } from '~/data'

const Testimonials = () => {
  const [filter, setFilter] = useState<TestimonialCategory | undefined>(undefined)
  return (
    <div className='mx-auto max-w-screen-2xl'>
      <div className='my-8 flex flex-col gap-5 px-24 font-normal *:justify-start *:rounded-lg *:border-[#648f69] *:py-5 *:text-lg *:transition-all *:duration-300 hover:*:-translate-y-0.5 hover:*:text-white lg:flex-row lg:px-10'>
        <Button
          onClick={() => setFilter(undefined)}
          variant='outline'
          className={
            !filter
              ? 'bg-[#587c5c] text-white hover:bg-[#587c5c]'
              : 'text-[#587c5c] hover:bg-[#9dc3a0]'
          }>
          All
        </Button>
        {testimonialCategories.map(category => (
          <Button
            key={category}
            onClick={() => setFilter(category)}
            variant='outline'
            className={
              filter === category
                ? 'bg-[#587c5c] text-white hover:bg-[#587c5c]'
                : 'text-[#587c5c] hover:bg-[#9dc3a0]'
            }>
            {category}
          </Button>
        ))}
      </div>
      <div className='grid grid-cols-1 gap-5 px-5 lg:grid-cols-3 lg:gap-10 lg:px-10'>
        {testimonials
          .filter(t => !filter || t.category === filter)
          .map((t, i) => (
            <Drawer key={i}>
              <DrawerTrigger asChild>
                <Card className='size-full cursor-pointer rounded-xl bg-muted/40 p-2'>
                  <Image
                    src={t.image}
                    alt=''
                    className='h-72 w-full rounded-lg object-cover'
                    height={1000}
                    width={1000}
                  />
                  <div className='p-2'>
                    <p className='my-2.5 line-clamp-1 text-xl font-semibold'>{t.name}</p>
                    <p className='line-clamp-5 text-foreground/70'>{t.content}</p>
                  </div>
                </Card>
              </DrawerTrigger>
              <DrawerContent className='flex flex-row py-6'>
                <Image
                  src={t.image}
                  alt=''
                  className='aspect-[4/3] h-[600px] rounded-lg object-cover'
                  height={1000}
                  width={1000}
                />
                <div className='mx-10'>
                  <p className='mb-5 mt-3 text-5xl font-semibold'>{t.name}</p>
                  <p className='text-xl text-foreground/70'>{t.content}</p>
                </div>
              </DrawerContent>
            </Drawer>
          ))}
      </div>
    </div>
  )
}

export default Testimonials
