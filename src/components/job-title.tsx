import { motion } from 'motion/react'

export function JobTitle() {
  return (
    <p>
      <motion.span
        className="font-medium text-base text-muted-foreground text-pretty"
        initial={{
          opacity: 0,
          filter: 'blur(10px)',
          y: 10,
        }}
        animate={{
          opacity: 1,
          filter: 'none',
          y: 0,
        }}
        transition={{
          ease: 'easeIn',
          duration: 0.48,
        }}
      >
        Application
      </motion.span>{' '}
      <motion.span
        className="font-medium text-base text-muted-foreground text-pretty"
        initial={{
          opacity: 0,
          filter: 'blur(10px)',
          y: 10,
        }}
        animate={{
          opacity: 1,
          filter: 'none',
          y: 0,
        }}
        transition={{
          ease: 'easeIn',
          duration: 0.56,
        }}
      >
        Developer
      </motion.span>{' '}
      <motion.span
        className="font-medium text-base text-muted-foreground text-pretty"
        initial={{
          opacity: 0,
          filter: 'blur(10px)',
          y: 10,
        }}
        animate={{
          opacity: 1,
          filter: 'none',
          y: 0,
        }}
        transition={{
          ease: 'easeIn',
          duration: 0.64,
        }}
      >
        at
      </motion.span>{' '}
      <motion.span
        className="font-medium text-base text-muted-foreground text-pretty"
        initial={{
          opacity: 0,
          filter: 'blur(10px)',
          y: 10,
        }}
        animate={{
          opacity: 1,
          filter: 'none',
          y: 0,
        }}
        transition={{
          ease: 'easeIn',
          duration: 0.72,
        }}
      >
        Lenovo
      </motion.span>
    </p>
  )
}
