'use client'

import * as React from 'react'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

import { Button } from '@a/ui/button'

function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  return (
    <Button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      variant='link'
      size='icon'
      className='size-9 transition-all duration-300 *:ml-px *:size-7 *:transition-all *:duration-700 hover:scale-110 hover:drop-shadow-lg *:hover:text-foreground focus-visible:ring-0'>
      <SunIcon className='rotate-0 scale-100 dark:-rotate-180 dark:scale-0' />
      <MoonIcon className='absolute rotate-180 scale-0 dark:rotate-0 dark:scale-100' />
    </Button>
  )
}

export default ThemeToggle
