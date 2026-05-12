import { AnimatePresence, motion } from "motion/react";
import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme-provider";
import { Button } from "./ui/button";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const isDark = theme === "dark";

    function toggleTheme() {
        setTheme(isDark ? "light" : "dark");
    }

    return (
        <Button
            size="icon"
            variant="secondary"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            className="relative overflow-hidden rounded-full text-muted-foreground hover:text-primary cursor-pointer"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={isDark ? "moon" : "sun"}
                    initial={{
                        opacity: 0,
                        scale: 0.6,
                        rotate: isDark ? -90 : 90,
                        y: 4,
                        filter: "blur(4px)",
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                        y: 0,
                        filter: "blur(0px)",
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0.6,
                        rotate: isDark ? 90 : -90,
                        y: -4,
                        filter: "blur(4px)",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 22,
                    }}
                    className="flex items-center justify-center"
                >
                    {isDark ? (
                        <Sun />
                    ) : (
                        <Moon />
                    )}
                </motion.div>
            </AnimatePresence>
        </Button>
    );
}