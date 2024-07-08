import { cn } from '@a/ui'
import { Card, CardContent } from '@a/ui/card'

import MotionWrap from '~/components/motion-wrap'

interface Experience {
  name: string
  company: string
  duration: string
  description?: string
}

interface ExperienceCardProps extends Experience {
  className?: string
}

const experiences: Experience[] = [
  {
    name: 'Web Development',
    duration: '2022 - Present',
    company: 'Acme Inc',
    description:
      'Building beautiful and functional websites using modern web technologies, focusing on performance, accessibility, and SEO-friendly design.'
  },
  {
    name: 'UI/UX Design',
    duration: '2021 - 2022',
    company: 'Creative Designs Ltd',
    description:
      'Creating delightful and intuitive user experiences, specializing in responsive design and user-centric methodologies.'
  },
  {
    name: 'Database Management',
    duration: '2020 - 2022',
    company: 'DataTech Solutions',
    description:
      'Storing and organizing data efficiently, ensuring data integrity, and optimizing database queries for high traffic applications.'
  },
  {
    name: 'Mobile Development',
    duration: '2019 - 2021',
    company: 'Innovative Apps Inc',
    description:
      'Crafting engaging and scalable apps for smartphones and tablets, focusing on cross-platform development and native performance.'
  }
]
const ExperienceCard = ({
  company,
  name,
  duration,
  description,
  className
}: ExperienceCardProps) => (
  <Card className={cn('border-none bg-transparent', className)}>
    <CardContent className='p-1'>
      <div className='flex items-baseline justify-between'>
        <h3 className='text-2xl font-semibold'>{company}</h3>
        <span className='text-sm font-medium'>{duration}</span>
      </div>
      <h4 className='mt-2 text-lg font-medium uppercase'>{name}</h4>
      <p className='mt-2'>{description}</p>
      <hr className='my-6 border-t border-border' />
    </CardContent>
  </Card>
)

const Experiences = () => (
  <MotionWrap className='w-full py-24 lg:py-32' id='experiences'>
    <div className='px-4 md:px-6'>
      <div className='grid gap-10 lg:grid-cols-2'>
        <div className='space-y-4'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none'>
            My Experience
          </h2>
          <p className='text-gray-500 dark:text-gray-400'>
            Here are some of my work experiences where I&apos;ve turned challenges into
            accomplishments, making things happen.
          </p>
        </div>
        <div className='grid gap-4'>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              name={experience.name}
              description={experience.description}
              company={experience.company}
              duration={experience.duration}
            />
          ))}
        </div>
      </div>
    </div>
  </MotionWrap>
)

export default Experiences
