import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "./ui/button";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <Button size={"icon-lg"} variant={"ghost"} onClick={toggleTheme} aria-label="Toggle theme" className="rounded-full">
            {theme === "dark" ? <Moon /> : <Sun />}
        </Button>
    );
}
