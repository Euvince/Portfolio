import { projects } from "@/content/projects";
import { pick, type Dictionary, type Locale } from "./i18n";
import { firstSentence } from "./text";
import type { Category, Project } from "./types";

/** Version légère d'un projet, pour les cartes et les listes. */
export interface ProjectPreview { slug: string; title: string; summary: string; tags: string[]; categories: Category[]; year: string }

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export function getAdjacent(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return { prev: projects[(i - 1 + projects.length) % projects.length], next: projects[(i + 1) % projects.length] };
}

export const toPreview = (p: Project, locale: Locale): ProjectPreview => ({
  slug: p.slug, title: pick(p.title, locale), summary: firstSentence(pick(p.summary, locale)),
  tags: p.tags, categories: p.categories, year: p.year,
});

export const categoryLabels = (d: Dictionary): Record<Category, string> => ({
  web: d.categoryWeb, mobile: d.categoryMobile, api: d.categoryApi,
});
