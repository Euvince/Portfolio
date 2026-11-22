"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/content/navigation";
import { site } from "@/content/site";
import type { Dictionary, Locale } from "@/lib/i18n";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur">
      <div className="container-page flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-3">
        <Link href={`/${locale}`} className="font-display font-bold">{site.name}</Link>
        <nav className="order-last flex w-full gap-1 overflow-x-auto sm:order-none sm:w-auto">
          {navigation.map(({ path, label }) => {
            const href = `/${locale}${path}`;
            const active = path === "" ? pathname === href : pathname.startsWith(href);
            return (
              <Link key={path} href={href} aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap rounded-lg px-3 py-1.5 transition-colors ${active ? "bg-accent-soft text-accent" : "text-muted hover:text-fg"}`}>
                {dict[label]}
              </Link>
            );
          })}
        </nav>
        <div className="flex gap-2"><LocaleSwitcher locale={locale} /><ThemeToggle /></div>
      </div>
    </header>
  );
}
