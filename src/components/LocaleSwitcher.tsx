"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

export function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const other: Locale = locale === "fr" ? "en" : "fr";
  return <Link className="btn w-14 justify-center" href={pathname.replace(`/${locale}`, `/${other}`)} hrefLang={other}>{other.toUpperCase()}</Link>;
}
