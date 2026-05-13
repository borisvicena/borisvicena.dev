import { AnimatePresence, motion } from 'motion/react'
import { Moon, Sun } from 'lucide-react'

import { useTheme } from '@/components/theme-provider'
import { Button } from './ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const isDark = theme === 'dark'

  function toggleTheme() {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <motion.div
      whileTap={{
        scale: 0.95,
      }}
    >
      <Button
        type="button"
        size="icon"
        variant="custom"
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        className="relative overflow-hidden"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? 'sun' : 'moon'}
            initial={{
              opacity: 0,
              scale: 0.75,
              rotate: isDark ? -45 : 45,
              y: 4,
              filter: 'blur(4px)',
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              y: 0,
              filter: 'blur(0px)',
            }}
            exit={{
              opacity: 0,
              scale: 0.75,
              rotate: isDark ? 45 : -45,
              y: -4,
              filter: 'blur(4px)',
            }}
            transition={{
              duration: 0.22,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pointer-events-none flex items-center justify-center"
          >
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </motion.span>
        </AnimatePresence>
      </Button>
    </motion.div>
  )
}
