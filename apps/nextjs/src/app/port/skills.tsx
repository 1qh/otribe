import { CodeIcon, DatabaseIcon, LayoutIcon, SmartphoneIcon } from 'lucide-react'

import { cn } from '@a/ui'
import { Card, CardContent } from '@a/ui/card'

import MotionWrap from '~/components/motion-wrap'
import Reveal from '~/components/reveal'

interface Skill {
  name: string
  description?: string
  Icon?: React.ComponentType<{ className?: string }>
}

interface SkillCardProps extends Skill {
  index: number
  className?: string
}

const skills: Skill[] = [
  {
    name: 'Web Development',
    description: 'Building beautiful and functional websites.',
    Icon: CodeIcon
  },
  {
    name: 'UI/UX Design',
    description: 'Creating delightful user experiences.',
    Icon: LayoutIcon
  },
  {
    name: 'Database Management',
    description: 'Storing and organizing data efficiently.',
    Icon: DatabaseIcon
  },
  {
    name: 'Mobile Development',
    description: 'Crafting apps for smartphones and tablets.',
    Icon: SmartphoneIcon
  }
]
const SkillCard = ({ name, description, Icon, index, className }: SkillCardProps) => (
  <Card className={cn('bg-muted/40', className)}>
    <CardContent className='flex flex-col items-start p-6'>
      <div className='flex w-full items-center justify-between'>
        <span className='text-lg font-semibold'>({index})</span>
        {Icon ? <Icon className='size-8' /> : <CodeIcon />}
      </div>
      <div className='grid gap-0.5'>
        <h3 className='mt-2 text-2xl font-bold leading-8 tracking-tight'>{name}</h3>
        <p className='mt-2 text-base text-gray-500'>{description ?? ''}</p>
      </div>
    </CardContent>
  </Card>
)

const Skills = () => (
  <MotionWrap className='w-full py-24 lg:py-32' id='skills'>
    <div className='space-y-4 px-4 md:px-6 lg:space-y-10'>
      <div className='flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left'>
        <div className='flex flex-col items-center lg:items-start'>
          <Reveal>
            <h2 className='text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight'>
              My
            </h2>
          </Reveal>
          <Reveal>
            <h2 className='-mt-2 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight'>
              Skills
            </h2>
          </Reveal>
        </div>
        <p className='mt-4 hidden text-gray-500 dark:text-gray-400 lg:mt-0 lg:block lg:w-[35%]'>
          Here are some of my skills where I&apos;ve turned knowledge into expertise, making things
          happen.
        </p>
      </div>
      <div className='mt-6 space-y-4'>
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            index={index + 1}
            name={skill.name}
            description={skill.description}
            Icon={skill.Icon}
          />
        ))}
      </div>
    </div>
  </MotionWrap>
)

export default Skills
