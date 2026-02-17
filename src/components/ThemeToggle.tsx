'use client';

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { Sun, Moon } from "lucide-react";
import gsap from "gsap";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const iconRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted && iconRef.current) {
            gsap.fromTo(iconRef.current,
                { rotate: -90, opacity: 0, scale: 0.5 },
                { rotate: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
            );
        }
    }, [theme, mounted]);

    if (!mounted) return <div className="p-2 w-10 h-10" />;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors duration-300 focus:outline-none"
            aria-label="Toggle theme"
        >
            <div ref={iconRef}>
                {theme === "dark" ? (
                    <Moon size={20} className="text-blue-400 fill-blue-400" />
                ) : (
                    <Sun size={20} className="text-yellow-500 fill-yellow-500" />
                )}
            </div>
        </button>
    );
}
