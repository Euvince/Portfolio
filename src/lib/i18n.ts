import { notFound } from "next/navigation";
import { en } from "@/content/dictionaries/en";
import { fr } from "@/content/dictionaries/fr";

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export type Dictionary = typeof fr;
/** Texte traduit : toujours une paire [français, anglais]. */
export type Localized<T> = readonly [fr: T, en: T];

const dictionaries: Record<Locale, Dictionary> = { fr, en };

export const isLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);
export const getDictionary = (locale: Locale) => dictionaries[locale];
export const pick = <T,>(value: Localized<T>, locale: Locale): T => value[locales.indexOf(locale)];

/** Lit et valide le segment [locale] de l'URL (404 si inconnu). */
export async function resolveLocale(params: Promise<{ locale: string }>): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return locale;
}
