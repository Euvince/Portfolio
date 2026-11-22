"use client";
import Link from "next/link";
import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { ProjectPreview } from "@/lib/projects";
import type { Category } from "@/lib/types";
import { ProjectCard } from "./ProjectCard";
import { TagList } from "./ui";

interface Labels { all: string; cards: string; list: string; categories: Record<Category, string> }

/** Filtres par catégorie + bascule cartes / liste. */
export function ProjectsExplorer({ items, locale, labels }: { items: ProjectPreview[]; locale: Locale; labels: Labels }) {
  const [filter, setFilter] = useState<Category | "all">("all");
  const [view, setView] = useState<"cards" | "list">("cards");
  const shown = items.filter((i) => filter === "all" || i.categories.includes(filter));
  const btn = (active: boolean) => `btn ${active ? "btn-primary" : ""}`;

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {(["all", "web", "mobile", "api"] as const).map((c) => (
          <button key={c} className={btn(filter === c)} onClick={() => setFilter(c)}>
            {c === "all" ? labels.all : labels.categories[c]}
          </button>
        ))}
        <span className="flex-1" />
        {(["cards", "list"] as const).map((v) => (
          <button key={v} className={btn(view === v)} onClick={() => setView(v)}>{labels[v]}</button>
        ))}
      </div>
      {view === "cards" ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((i) => <ProjectCard key={i.slug} item={i} locale={locale} />)}
        </div>
      ) : (
        shown.map((i, n) => (
          <Link key={i.slug} href={`/${locale}/projects/${i.slug}`} className="grid grid-cols-[2rem_1fr_auto] gap-3 border-t border-line py-5 hover:text-accent">
            <span className="text-muted">{n + 1}</span>
            <div><h3 className="font-display text-lg font-semibold">{i.title}</h3><TagList items={i.tags} /></div>
            <span className="text-muted">{i.year}</span>
          </Link>
        ))
      )}
    </>
  );
}
