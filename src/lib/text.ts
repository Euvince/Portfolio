import { pick, type Locale, type Localized } from "./i18n";

export const firstSentence = (text: string) => text.split(". ")[0].replace(/\.$/, "") + ".";
export const periodText = (period: string | Localized<string>, locale: Locale) =>
  typeof period === "string" ? period : pick(period, locale);
