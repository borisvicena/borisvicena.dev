import { motion } from 'motion/react'
import type { Variants } from 'motion/react'

type AnimatedWordsElement = 'p' | 'h1' | 'span'

type AnimatedWordsProps = {
  text: string
  as?: AnimatedWordsElement
  className?: string
  wordClassName?: string
  delay?: number
  stagger?: number
}

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(10px)',
    y: 10,
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.48,
    },
  },
}

const elements = {
  p: motion.p,
  h1: motion.h1,
  span: motion.span,
}

export function AnimatedWords({
  text,
  as = 'p',
  className = 'text-base font-medium text-muted-foreground text-pretty',
  wordClassName = 'inline-block',
  delay = 0,
  stagger = 0.08,
}: AnimatedWordsProps) {
  const words = text.split(' ')
  const Component = elements[as]

  return (
    <Component
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={wordVariants}
          className={wordClassName}
        >
          {word}
          {index < words.length - 1 ? '\u00A0' : null}
        </motion.span>
      ))}
    </Component>
  )
}
