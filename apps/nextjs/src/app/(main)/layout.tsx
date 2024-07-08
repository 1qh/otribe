import Image from 'next/image'
import Link from 'next/link'

import Cursor from '~/components/cursor'
import ThemeToggle from '~/components/theme-toggle'
import Nav from './nav'

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Nav />
    {children}
    <div className='relative bg-[#587c5c]'>
      <div className='mx-auto flex max-w-screen-2xl items-center justify-between px-3 text-white'>
        © O-tribe. All rights reserved
        <ThemeToggle />
        <div className='flex gap-5 py-7'>
          <Link href='https://www.instagram.com/_otribe_/'>
            <Image src='/ig.svg' alt='' width={32} height={32} />
          </Link>
          <Link href='https://facebook.com/profile.php?id=100063735896326'>
            <Image src='/fb.svg' alt='' width={32} height={32} />
          </Link>
        </div>
      </div>
    </div>
    <Cursor />
  </>
)

export default Layout
