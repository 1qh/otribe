import Image from 'next/image'

const Services = () => (
  <div className='mx-auto mt-20 max-w-screen-lg space-y-8 px-5 *:flex *:flex-col *:items-center *:gap-16 *:rounded-xl *:border *:border-[#587c5c] *:px-5 *:py-12 *:shadow *:shadow-[#587c5c] *:transition-all *:duration-500 hover:*:drop-shadow-xl lg:space-y-20 lg:px-0 lg:*:flex-row lg:*:px-16'>
    <div>
      <Image src='/individuals.png' alt='' width={300} height={300} className='' />
      <div className=''>
        <p className='mb-3 text-center text-4xl font-bold lg:text-left'>Individuals</p>
        <p className='text-lg text-foreground/70 lg:text-base'>
          It is time to focus on you. The one-on-one sessions allow you to flexibly explore
          Meditation and Mindfulness at your own pace and go deeper into your practice with full
          support. As a result, you will learn to become more aware of yourself, your thoughts, your
          reactions, and a deeper awareness the world we live in.
        </p>
      </div>
    </div>
    <div className='flex-row-reverse'>
      <Image src='/couples-families.png' alt='' width={300} height={300} className='' />
      <div className=''>
        <p className='mb-3 text-center text-4xl font-bold lg:text-left'>Couples & families</p>
        <p className='text-lg text-foreground/70 lg:text-base'>
          It can be very rewarding when growth and transformation happens with someone else,
          especially if that other is dear to you. Having a partner or family member join you in a
          Meditation and Mindfulness program comes with many benefits. You become accountable for
          each other’s practice and there is encouragement from each other. But the most important
          thing is that you get to share in each other’s experiences and there is great learning in
          that. About the practice and about each other. What Meditation and Mindfulness does for a
          couple or family is that you will learn about patience, tolerance and understanding your
          emotions which are all vital in sustaining a healthy relationship.
        </p>
      </div>
    </div>
    <div>
      <Image src='/team-training.png' alt='' width={300} height={300} className='' />
      <div className=''>
        <p className='mb-3 text-center text-4xl font-bold lg:text-left'>Team training</p>
        <p className='text-lg text-foreground/70 lg:text-base'>
          Learning about Meditation and Mindfulness in a work environment can be very powerful. It
          has the ability to change an entire work culture and dynamic. Practicing Meditation and
          Mindfulness can cultivate focus and concentration as well as increase memory and
          creativity. Perfect for a working environment! Apart from that, teams will build skills to
          manage stresses but also give new perspectives on stressful situations.
        </p>
      </div>
    </div>
  </div>
)

export default Services
