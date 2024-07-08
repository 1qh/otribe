import Image from 'next/image'

import { Button } from '@a/ui/button'
import { Input } from '@a/ui/input'
import { Textarea } from '@a/ui/textarea'

const Contact = () => (
  <div className='mx-auto my-10 flex max-w-screen-xl flex-col gap-10 px-5 lg:flex-row lg:px-0'>
    <div className='w-96 *:text-foreground/70'>
      <Image
        src='/malcolm-ava.png'
        alt=''
        width={400}
        height={400}
        className='mx-auto w-64 p-3 lg:w-96'
      />
      <p className='my-5'>
        To learn more about my Meditation & Mindfulness coaching, please complete this form and I’ll
        be in touch with you as soon as possible.
      </p>
      <p>With Metta,</p>
      <p>Malcolm</p>
    </div>
    <div className='w-full rounded-lg border p-5 lg:p-10'>
      <p>Your name (require)</p>
      <Input className='mb-5 h-12' />
      <p>Your Email (require)</p>
      <Input className='mb-5 h-12' />
      <p>Subject</p>
      <Input className='mb-5 h-12' />
      <p>Your Message</p>
      <Textarea className='mb-5 h-40' />
      <Button className='h-16 w-full rounded-lg bg-[#587c5c] text-3xl'>Contact O-tribe</Button>
    </div>
  </div>
)

export default Contact
