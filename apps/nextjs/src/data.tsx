import Image from 'next/image'

export type TestimonialCategory = 'Companies' | 'Individuals' | 'Couples & Families'
export const testimonialCategories: TestimonialCategory[] = [
  'Companies',
  'Individuals',
  'Couples & Families'
]

export type Tab = 'About' | 'Services' | 'Testimonials' | 'Contact'
export const tabs: Tab[] = ['About', 'Services', 'Testimonials', 'Contact']

export type About =
  | 'About O-tribe'
  | 'Meet Malcolm'
  | 'Meditation vs Mindfulness'
  | 'Benefits of Meditation'

export interface Testimonial {
  image: string
  name: string
  category: TestimonialCategory
  content: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Faster Zebra – Education company',
    image: '/faster-zebra.png',
    category: 'Companies',
    content:
      'At Faster Zebra, we believe in nurturing well-rounded digital professionals, and that includes fostering their mental well-being. We were so impressed by the personal transformative experiences we had with o-tribe’s training. The consistent themes of clarity, focus, and inner peace resonate deeply with our company values. We’re confident that integrating o-tribe’s meditation and mindfulness expertise into our curriculum will equip our students and teachers with invaluable tools to navigate the demands of the world of design and technology, while embedding a sense of balance and purpose.'
  },
  {
    name: 'Chiara – Osteopath & Masseuse',
    image: '/chiara.jpeg',
    category: 'Individuals',
    content:
      'Undertaking a course with Malcolm has significantly increased my self-awareness and mindfulness of my thoughts, feelings and surroundings. I’ve become more observant of my triggers and distractions, which has clarified my work and studies. When I feel overwhelmed by my workload or academic pressures, I rely on the tools and techniques I learned with O-tribe. Thank you, Malcolm, for being an exceptional teacher!'
  },
  {
    name: 'Antionette – Health Professional',
    image: '/antionette.png',
    category: 'Individuals',
    content:
      'Thank you so much for the guided meditation. It has helped me bring more awareness to self and my surroundings. I’ve been able to observe my thoughts more so rather than get involved with them. Your patience, clarity and helpfulness is truly appreciated. Namaste.'
  },
  {
    name: 'Charbel – Entrepreneur',
    image: '/charbel.jpeg',
    category: 'Individuals',
    content:
      'Malcolm’s energy is like a gentle, cooling summer breeze on a warm, humid day. I’ve experienced Malcolm’s meditation techniques in a few different contexts: one on one, in a small group and one on one outdoors in nature. He seamlessly integrates traditional Buddhist practices, modern mindfulness techniques and current scientific research into an integrated and informative practice that not only stills my mind but leaves me feeling energised, present and ready for the challenges that our chaotic world throws my way. I can’t recommend Malcolm’s practice enough.'
  },
  {
    name: 'Fay & George – Business Owners',
    image: '/costis.jpeg',
    category: 'Couples & Families',
    content:
      'Fay and I would like to thank you for the meditation sessions via zoom. We enjoyed the calmness and differing meditation topics and techniques during each session. As a Teacher you have a very warm and welcoming voice that helped us relax and be in the moment. We thank you for taking us through this journey as we continue to implement this into our daily lives.'
  },
  {
    name: 'Gisele – Business Coach',
    image: '/gisele.jpeg',
    category: 'Individuals',
    content:
      'It is so clear how passionate Malcolm is about meditation and mindfulness. I recently experienced his teachings and I loved how he made meditation and mindfulness so accessible. I have been a meditator for over 20 years and I gained more insight and clarity through his teachings. The fact that Malcolm studied meditation and mindfulness with the monks in Thailand not only speaks volumes of his commitment and integrity to going deeper in his own practice, but he shares that state of stillness, peace and clarity of mind and heart with his students. In a world of stress, uncertainty and mental health challenges across all age groups being one of our biggest conversations, Malcolm’s leadership is invaluable.'
  },
  {
    name: 'Jason – Abundance Coach',
    image: '/jason.jpeg',
    category: 'Individuals',
    content:
      'I have recently been fortunate to attend Malcolm’s, Meditation and Mindfulness training. He has such a wonderful presence and the variety of meditation and mindfulness teachings he imparted have been so valuable. I highly recommend attending Malcolm’s classes not only for the experience of Meditation but also for his teachings.'
  },
  {
    name: 'Victor – Technology Leader',
    image: '/victor.jpeg',
    category: 'Individuals',
    content:
      'Malcolm is much more than a meditation teacher, he’s a friend, mentor, and counsellor all at once. He allows you to completely express yourself freely of any negative or positive feelings you may be experiencing, and then uses meditation principles to help you see them with a different light. Often putting them in context and giving you the sense you are in full control. It’s incredibly powerful.'
  }
]

interface Benefit {
  title: string
  content: string
  image: string
}
const benefits: Benefit[] = [
  {
    title: 'Improve Focus & Attention',
    content:
      'Enhance your memory, creativity and problem-solving skills and learn to perform at your best.',
    image: '/focus.png'
  },
  {
    title: 'Create Mental Calm',
    content:
      'Learn techniques to help reduce the symptoms of stress, anxiety, depression and sleep disorder.',
    image: '/calm.png'
  },
  {
    title: 'Enhance Physiology',
    content:
      'Prioritise your general health to improve your biology and replace emotional triggers with habits that serve you.',
    image: '/waves.png'
  },
  {
    title: 'Deepen Self-Awareness',
    content:
      'Understand your thoughts, emotions and behaviours to help create an aligned, meaningful and productive life.',
    image: '/meaning.png'
  },
  {
    title: 'Learn To Let Go',
    content:
      'Acknowledge and identify what no longer serves you and observe your world with compassion and kindness.',
    image: '/unlock.png'
  },
  {
    title: 'Increase Joy',
    content:
      'Replace old thought patterns, limiting beliefs and damaging behaviours to bring a new sense of happiness.',
    image: '/joy.png'
  }
]

export const aboutComponents: Record<About, React.ReactNode> = {
  'About O-tribe': (
    <div className='flex flex-col gap-10 lg:flex-row'>
      <Image
        src='/about.png'
        alt=''
        width={500}
        height={500}
        className='mx-auto size-56 lg:size-96'
      />
      <div className='space-y-7'>
        <p>The origin of O-tribe lies in the heart of the letter or symbol O.</p>
        <p>
          The symbol ‘O’ carries multiple meanings. For O-tribe, in the context of expression
          through language, it means both nothing and everything at the same time. It is a unity of
          the two entities that makes it a powerful symbol.
        </p>
        <p>
          When we allow ourselves to detach from form, feeling, perception, mental formations and
          sense-experience, the space we create can then free us from suffering. This freedom will
          intrinsically make us tune into our true, authentic and whole selves; that’s the
          ‘everything’ factor to the symbol O.
        </p>
        <p>
          Since the dawn of consciousness, the human race has had an intrinsic desire for community
          and connection. Finding one’s ‘Tribe’ is paramount to our search for meaning; the loyalty,
          protection and affinity brings a sense of strength through unity. O-tribe is about growing
          together as a species and being the best versions of ourselves. When one rises, we all
          rise.
        </p>
        <p>As the African proverb says:</p>
        <p>“If you want to go quickly, go alone. If you want to go far, go together.”</p>
      </div>
    </div>
  ),
  'Meet Malcolm': (
    <div className='flex flex-col gap-10 lg:flex-row'>
      <Image
        src='/malcolm-ava.png'
        alt=''
        width={500}
        height={500}
        className='mx-auto size-56 lg:size-96'
      />
      <div className='space-y-10'>
        <p>
          Meet Malcolm, a dedicated practitioner of Meditation and Mindfulness who is on a
          never-ending journey of learning, discovery, and personal growth. His passion is to share
          the art, joy, and incredible benefits of Meditation and Mindfulness with others, creating
          a safe and welcoming space for you to reconnect with the present moment and retrain your
          mind.
        </p>
        <p>
          With a warm, calm, and relatable presence, Malcolm seamlessly blends his passions for
          psychology and Buddhism, infusing his teachings with a balanced approach that embraces
          both the spiritual and scientific aspects of Meditation and Mindfulness.
        </p>
        <p>
          As an accredited Meditation and Mindfulness Teacher, Malcolm has undergone extensive
          training under the guidance of Dr. Itai Ivtzan, complementing his IMMA accreditation with
          a wealth of spiritual and scientific knowledge. Constantly seeking growth, Malcolm
          recently completed a course in Pranayama breath-work, recognising the vital role of the
          breath in stilling the mind, enhancing awareness, and harmonising the body’s systems.
        </p>
        <p>
          Malcolm’s love for Eastern spiritual practices ignited during his late teens when he
          delved into the pages of “The Art of Happiness” by the Dalai Lama. Since then, he has
          embarked on numerous transformative journeys to sacred places like Tibet, Thailand,
          Indonesia, and India. In 2019, he took a leap of faith, leaving behind his life in
          Australia to immerse himself in the practices of Theravada Buddhism at a Thai forest
          monastery. His exploration has encompassed various Meditation styles, including the
          profound Vipassana Meditation technique.
        </p>
        <p>
          Through his own experiences and deep understanding, Malcolm is here to guide you on your
          own Meditation and Mindfulness journey, offering insights, support, and practical
          techniques to help you cultivate inner peace, clarity, and well-being.
        </p>
      </div>
    </div>
  ),
  'Meditation vs Mindfulness': (
    <div className='flex flex-col gap-10 lg:flex-row'>
      <Image
        src='/individuals.png'
        alt=''
        width={500}
        height={500}
        className='mx-auto size-56 lg:size-96'
      />
      <div className='space-y-7'>
        <p>
          There can be some confusion between the meaning of these two terms as they’re often used
          in a similar context.
        </p>
        <p>
          Essentially, mindfulness is the practice of bringing your full awareness to all aspects of
          the life you live, day to day. Tuning into the present moment of each task you do and
          while you’re doing it.
        </p>
        <p>
          Let’s take brushing your teeth for example. For an activity so mundane to many of us,
          let’s engage with it. Brushing your teeth mindfully would be being aware of the motion of
          the brushing, the tension in the muscles of your hand as you hold the toothbrush, the
          taste of the toothpaste in your mouth, what is your tongue doing at this point. And then
          to reflect after on the task to see how you’re feeling. Are you feeling sleepy?
          revitalised?
        </p>
        <p>All this observation was done without judgment. This is mindful living.</p>
        <p>
          In teaching the mind this, we ultimately become more present in our lives. To our family,
          friends, colleagues etc. We take a breath, not bound to reactive thoughts and feelings,
          which is particularly helpful when faced with challenging circumstances or difficult
          issues.
        </p>
        <p>
          Meditation is the formal practice of finding clarity and peace within ourselves. This is
          achieved through different meditation techniques that can all lead to the same place of
          clarity and peace.
        </p>
        <p>
          See Mindfulness as a way of life and meditation as the tool to make us live a more
          peaceful and happier life.
        </p>
      </div>
    </div>
  ),
  'Benefits of Meditation': (
    <div className='flex max-w-screen-lg flex-col items-center gap-5'>
      <p>
        The benefits of meditation are many; from retraining your mind and taking charge of your
        thoughts, to allowing yourself the space to simply breathe, we cannot understate the power
        of meditation in a world that’s constantly vying for our attention.
      </p>
      <div className='grid grid-cols-1 gap-10 space-x-5 lg:grid-cols-3'>
        {benefits.map(benefit => (
          <div key={benefit.title} className='flex flex-col items-center gap-5'>
            <Image src={benefit.image} alt='' width={150} height={150} />
            <h3 className='text-xl font-bold'>{benefit.title}</h3>
            <p className='text-center'>{benefit.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
