"use client";
import { useTheme } from "next-themes";

const icon = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

const Sun = ({ className }: { className?: string }) => (
  <svg {...icon} className={className}>
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const Moon = ({ className }: { className?: string }) => (
  <svg {...icon} className={className}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

/** Même gabarit que LocaleSwitcher (classe `btn`, largeur w-14). Soleil en clair, lune en sombre. */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button type="button" aria-label="Toggle theme" className="btn w-14 justify-center"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      <Sun className="dark:hidden" />
      <Moon className="hidden dark:block" />
    </button>
  );
}
