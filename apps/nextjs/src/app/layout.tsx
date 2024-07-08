import type { Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Provider } from 'jotai/react'
import { Toaster } from 'sonner'

import { cn } from '@a/ui'
import { ThemeProvider } from '@a/ui/theme'

import '~/app/globals.css'

import Lenis from '~/components/lenis'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin-ext']
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en' suppressHydrationWarning>
    <body
      className={cn(
        'min-h-screen bg-background tracking-tight text-foreground antialiased',
        poppins.className
      )}>
      <Provider>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Lenis>{children}</Lenis>
          <Toaster />
        </ThemeProvider>
      </Provider>
    </body>
  </html>
)

export default RootLayout
