import type { Localized } from "./i18n";

export type Category = "web" | "mobile" | "api";

export interface StackItem { name: string; description?: Localized<string> }

export interface Project {
  slug: string;
  categories: Category[];
  year: string;
  inProgress?: boolean;
  title: Localized<string>;
  summary: Localized<string>;
  tags: string[];
  repoUrl?: string;
  context: Localized<string[]>;
  features?: Localized<string[]>;
  stack: { frontend?: StackItem[]; backend?: StackItem[] };
  dataModel?: StackItem[];
  structure: { frontend?: string; backend?: string };
  learned?: Localized<string[]>;
}

export interface Experience {
  company: string;
  role: Localized<string>;
  period: string | Localized<string>;
  location?: Localized<string>;
  note?: Localized<string>;
  stack?: string[];
  highlights: Localized<string[]>;
  outcome?: Localized<string>;
  /** false = affiché sur À propos mais pas sur la page CV. */
  showOnCv?: boolean;
}

export interface Education {
  school: string;
  degree: Localized<string>;
  period: string;
  location: Localized<string>;
  status: "ongoing" | "done";
  courses: Localized<string[]>;
}

export interface SkillGroup { label: Localized<string>; items: string[] }
export interface Domain { code: string; title: Localized<string>; summary: Localized<string>; highlights: Localized<string[]>; tags: string[] }
export interface SocialLink { label: string; href: string }
