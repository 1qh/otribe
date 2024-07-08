import { motion } from 'framer-motion'

import { cn } from '@a/ui'

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 10,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001
}

const NavItem = ({
  setActive,
  onClick,
  active,
  item,
  children
}: {
  setActive: (item: React.ReactNode) => void
  onClick?: () => void
  active: React.ReactNode | null
  item: React.ReactNode
  children?: React.ReactNode
}) =>
  motion.p &&
  motion.div && (
    <div onMouseEnter={() => setActive(item)} onClick={onClick} className='relative'>
      <motion.p
        transition={{ duration: 0.3 }}
        className={cn(
          active === item && 'opacity-100',
          typeof item === 'string' &&
            'cursor-pointer px-5 py-3 text-xl opacity-90 duration-300 hover:font-semibold hover:tracking-normal hover:opacity-100'
        )}>
        {item}
      </motion.p>
      {active && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition}>
          {active === item && (
            <div className='absolute left-1/2 -translate-x-1/2 pt-4'>
              <motion.div
                transition={transition}
                layoutId='active'
                className='overflow-hidden rounded-2xl border border-black/[0.2] bg-background shadow-xl backdrop-blur-sm dark:border-white/[0.2]'>
                <motion.div layout className='h-full w-max'>
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )

export default NavItem
