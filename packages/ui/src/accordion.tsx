'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'

import { cn } from '@a/ui'

const Accordion = AccordionPrimitive.Root,
  AccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
  >(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item className={cn('border-b', className)} ref={ref} {...props} />
  )),
  AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
  >(({ children, className, ...props }, ref) => (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        className={cn(
          'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
          className
        )}
        ref={ref}
        {...props}>
        {children}

        <ChevronDownIcon className='size-4 shrink-0 text-muted-foreground transition-transform duration-200' />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )),
  AccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
  >(({ children, className, ...props }, ref) => (
    <AccordionPrimitive.Content
      className='overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
      ref={ref}
      {...props}>
      <div className={cn('pb-4 pt-0', className)}>{children}</div>
    </AccordionPrimitive.Content>
  ))

AccordionContent.displayName = AccordionPrimitive.Content.displayName
AccordionItem.displayName = 'AccordionItem'
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
