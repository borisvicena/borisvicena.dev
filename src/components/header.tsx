import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className="absolute right-0 top-0 flex justify-end p-8">
      <ThemeToggle />
    </header>
  )
}
