import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="p-8 w-full h-full flex justify-center">

      <div className="flex flex-col items-center justify-center max-w-md">
        <h1 className="text-4xl font-medium">Boris Vicena</h1>
        <p className="mt-4 text-lg">
          Developer
        </p>
      </div>
    </div>
  )
}
