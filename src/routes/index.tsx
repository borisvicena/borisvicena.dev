import { motion } from "motion/react"
import { createFileRoute } from '@tanstack/react-router'
import { JobTitle } from "#/components/job-title"

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="p-8 w-full h-full flex justify-center">

      <div className="flex flex-col max-w-lg">

        <div className="mb-8">
          <motion.h1
            className="font-medium text-base text-balance"
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: 10
            }}
            animate={{
              opacity: 1,
              filter: "none",
              y: 0
            }}
            transition={{
              ease: "easeIn",
              duration: 0.32
            }}
          >
            Boris Vicena
          </motion.h1>


          <JobTitle />
        </div>

        <motion.p
          className="text-base text-muted-foreground text-pretty"
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            y: 10
          }}
          animate={{
            opacity: 1,
            filter: "none",
            y: 0

          }}
          transition={{
            ease: "easeIn",
            duration: 0.48
          }}
        >
          I’m a developer building intentional websites and applications with precision, clarity, and attention to detail. Currently at Lenovo, previously founder of GoSocial.
        </motion.p>

        <div className="flex gap-4 mt-4">
          <motion.a
            href="https://github.com/borisvicena"
            className="text-muted-foreground hover:underline hover:text-primary"
            target="_blank"
            rel="noreferrer"
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: 10,

            }}
            animate={{
              opacity: 1,
              filter: "none",
              y: 0,
            }}
            transition={{
              ease: "easeIn",
              duration: 0.64
            }}
          >
            gh
          </motion.a>

          <motion.a
            href="https://tiktok.com/@borisvicena"
            className="text-muted-foreground hover:underline hover:text-primary"
            target="_blank"
            rel="noreferrer"
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: 10,
            }}
            animate={{
              opacity: 1,
              filter: "none",
              y: 0,
            }}
            transition={{
              ease: "easeIn",
              duration: 0.72
            }}
          >
            tiktok
          </motion.a>

          <motion.a
            href="https://instagram.com/borisvicena"
            className="text-muted-foreground hover:underline hover:text-primary"
            target="_blank"
            rel="noreferrer"
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: 10,
            }}
            animate={{
              opacity: 1,
              filter: "none",
              y: 0
            }}
            transition={{
              ease: "easeIn",
              duration: 0.8
            }}
          >
            x
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/borisvicena"
            className="text-muted-foreground hover:underline hover:text-primary"
            target="_blank"
            rel="noreferrer"
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: 10,
            }}
            animate={{
              opacity: 1,
              filter: "none",
              y: 0
            }}
            transition={{
              ease: "easeIn",
              duration: 0.88
            }}
          >
            linkedin
          </motion.a>
        </div>
      </div>
    </div>
  )
}
