import { ThemeToggle } from "./theme-toggle";

export function Header() {
    return (
        <div className="flex justify-end m-4 p-4">
            <ThemeToggle />
        </div>
    )
}