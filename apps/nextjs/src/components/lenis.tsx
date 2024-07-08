// do not render this in a layout
// have a wrapper component which does it each render
// https://github.com/darkroomengineering/lenis/issues/319
'use client'

import { useEffect } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'

function Lenis({ children }: { children: React.ReactNode }) {
  const lenis = useLenis()

  useEffect(() => {
    document.addEventListener('DOMContentLoaded', () => {
      lenis?.stop()
      lenis?.start()
    })
  }, [])

  return (
    <ReactLenis root options={{ duration: 2 }}>
      {children}
    </ReactLenis>
  )
}

export default Lenis
