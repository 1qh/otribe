import Image from 'next/image'
import Link from 'next/link'
import { InfoIcon } from 'lucide-react'

import { cn } from '@a/ui'
import { Button } from '@a/ui/button'
import { Card, CardContent, CardFooter } from '@a/ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@a/ui/tooltip'

import MotionWrap from '~/components/motion-wrap'
import Reveal from '~/components/reveal'

interface Project {
  name: string
  slug: string
  description?: string
  thumbnail?: string
}

interface ProjectCardProps extends Project {
  className?: string
}

const projects: Project[] = [
  {
    name: 'Personal Portfolio Website',
    slug: 'portfolio',
    description:
      'A personal portfolio to showcase your coding projects, resume, and skills in a beautifully designed format.',
    thumbnail: '/images/projects/portfolio/cover.jpg'
  },
  {
    name: 'Recipe Sharing App',
    slug: 'recipe_app',
    description:
      'A social app for food lovers where users can post, share, and discover recipes from around the world.',
    thumbnail: '/images/projects/recipe_app/cover.jpg'
  },
  {
    name: 'Virtual Study Group Platform',
    slug: 'study_group',
    description:
      'A platform where students can form virtual study groups, schedule sessions, and share resources in real-time.',
    thumbnail: '/images/projects/study_group/cover.jpg'
  },
  {
    name: 'Fitness Tracker App',
    slug: 'fitness_tracker',
    description:
      'A mobile app that helps users track their fitness activities, set goals, and monitor progress with motivational tools.',
    thumbnail: '/images/projects/fitness_tracker/cover.jpg'
  },
  {
    name: 'Eco-friendly Marketplace',
    slug: 'eco_marketplace',
    description:
      'An e-commerce platform dedicated to eco-friendly products where users can buy, sell, and learn about sustainable living.',
    thumbnail: '/images/projects/eco_marketplace/cover.jpg'
  },
  {
    name: 'Interactive Coding Tutorial Site',
    slug: 'coding_tutorials',
    description:
      'A website offering interactive coding tutorials and challenges to help users learn programming languages through practice.',
    thumbnail: '/images/projects/coding_tutorials/cover.jpg'
  }
]

const ProjectCard = ({ name, description, thumbnail, slug, className }: ProjectCardProps) => (
  <Card
    className={cn(
      'group relative flex flex-col justify-between overflow-hidden rounded-md bg-muted/40',
      className
    )}>
    <CardContent className='z-[2] inline-block w-full overflow-hidden p-0'>
      <Image
        src={thumbnail ?? '/placeholder.svg'}
        alt={`Image of ${name}`}
        width={0}
        height={0}
        sizes='100vw'
        className='h-auto max-h-96 w-full object-cover transition-transform duration-300 hover:scale-105'
      />
    </CardContent>
    <CardFooter className='grid grid-cols-1 items-center gap-4 p-4 md:p-6 lg:grid-cols-2'>
      <div>
        <h3 className='text-xl font-bold'>{name}</h3>
        <p className='text-sm text-gray-500 dark:text-gray-400'>{description ?? ''}</p>
      </div>
      <div className='flex items-center justify-end'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant='outline'
                className='z-[2] rounded-full border bg-muted hover:bg-foreground/10'
                asChild>
                <Link href={'/projects/' + slug}>
                  <InfoIcon />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>More Details</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </CardFooter>
    <Link href={'/projects/' + slug} className='absolute inset-0 block' />
  </Card>
)
const Projects = () => (
  <MotionWrap className='w-full py-24 lg:py-32' id='projects'>
    <div className='space-y-4 px-4 md:space-y-6 md:px-6 lg:space-y-10'>
      <div className='flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left'>
        <div className='flex flex-col items-center lg:items-start'>
          <Reveal>
            <h2 className='text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight'>
              My
            </h2>
          </Reveal>
          <Reveal>
            <h2 className='-mt-2 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight'>
              Projects
            </h2>
          </Reveal>
        </div>
        <p className='mt-4 hidden text-gray-500 dark:text-gray-400 lg:mt-0 lg:block lg:w-[35%]'>
          Here are some of my projects where I&apos;ve turned code into cool, functional stuff.
        </p>
      </div>
      <div className='mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            slug={project.slug}
            name={project.name}
            description={project.description}
            thumbnail={project.thumbnail}
          />
        ))}
      </div>
    </div>
  </MotionWrap>
)

export default Projects
