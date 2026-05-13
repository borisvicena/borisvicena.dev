import { motion } from 'motion/react'
import type { Variants } from 'motion/react'
import { createFileRoute } from '@tanstack/react-router'

import { AnimatedWords } from '#/components/animated-words'
import { DitherAvatarSVG } from '#/components/dither-avatar'

export const Route = createFileRoute('/')({ component: Home })

const socialLinks = [
  {
    label: 'gh',
    ariaLabel: 'GitHub',
    href: 'https://github.com/borisvicena',
    external: true,
  },
  {
    label: 'tiktok',
    ariaLabel: 'TikTok',
    href: 'https://tiktok.com/@borisvicena',
    external: true,
  },
  {
    label: 'x',
    ariaLabel: 'X',
    href: 'https://x.com/borisvicena',
    external: true,
  },
  {
    label: 'linkedin',
    ariaLabel: 'LinkedIn',
    href: 'https://linkedin.com/in/borisvicena',
    external: true,
  },
  {
    label: 'mail',
    ariaLabel: 'Email',
    href: 'mailto:boris.vicena@gmail.com',
    external: false,
  },
] as const

const fadeUpVariants: Variants = {
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

function Home() {
  return (
    <main className="flex min-h-screen w-full justify-center p-8">
      <section className="flex w-full max-w-lg flex-col justify-center">
        <header className="mb-8">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 0.1,
              ease: 'easeOut',
              duration: 0.48,
            }}
            className="mb-6"
          >
            <DitherAvatarSVG
              seed="borisvicena.dev"
              alt="Boris Vicena"
              size={40}
              className="block rounded-full outline-1 -outline-offset-1 outline-foreground/10"
            />
          </motion.div>

          <AnimatedWords
            as="h1"
            text="Boris Vicena"
            delay={0.2}
            stagger={0.12}
            className="text-base font-semibold"
          />

          <AnimatedWords
            text="Application Developer at Lenovo"
            delay={0.4}
            stagger={0.12}
            className="text-base text-muted-foreground"
          />
        </header>

        <motion.p
          className="text-base leading-relaxed text-muted-foreground/80 text-pretty"
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.6,
            ease: 'easeOut',
            duration: 0.48,
          }}
        >
          I’m a developer building intentional websites and applications with
          precision, clarity, and attention to detail. Currently at Lenovo,
          previously founder of GoSocial.
        </motion.p>

        <motion.p
          className="mt-4 text-sm text-muted-foreground/60"
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.72,
            ease: 'easeOut',
            duration: 0.48,
          }}
        >
          Interested in open source, developer tools, and thoughtful web
          interfaces.
        </motion.p>

        <motion.div
          className="mt-6 h-px w-12 bg-border"
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.78,
            ease: 'easeOut',
            duration: 0.48,
          }}
        />

        <motion.ul
          className="mt-4 flex gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 0.92,
                staggerChildren: 0.08,
              },
            },
          }}
          aria-label="Social links"
        >
          {socialLinks.map((link) => (
            <motion.li key={link.href} variants={fadeUpVariants}>
              <a
                href={link.href}
                aria-label={link.ariaLabel}
                className="text-muted-foreground/70 transition-colors hover:text-muted-foreground hover:underline hover:underline-offset-4"
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </main>
  )
}
