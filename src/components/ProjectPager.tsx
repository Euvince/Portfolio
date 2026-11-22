import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import { pick } from "@/lib/i18n";
import type { Project } from "@/lib/types";

export function ProjectPager({ prev, next, locale, dict }: { prev: Project; next: Project; locale: Locale; dict: Dictionary }) {
  const base = `/${locale}/projects`;
  const box = "card group flex items-center gap-4 p-6 transition-colors hover:border-accent";
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2">
      <Link href={`${base}/${prev.slug}`} className={box}>
        <span className="text-3xl text-accent transition-transform group-hover:-translate-x-1">←</span>
        <span><span className="text-sm text-muted">{dict.prevProject}</span><span className="block font-display text-xl font-bold">{pick(prev.title, locale)}</span></span>
      </Link>
      <Link href={`${base}/${next.slug}`} className={`${box} justify-between text-right`}>
        <span><span className="text-sm text-muted">{dict.nextProject}</span><span className="block font-display text-xl font-bold">{pick(next.title, locale)}</span></span>
        <span className="animate-nudge text-3xl text-accent">→</span>
      </Link>
    </div>
  );
}
