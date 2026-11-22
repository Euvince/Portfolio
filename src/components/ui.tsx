import type { ReactNode } from "react";

export function TagList({ items, strong }: { items: readonly string[]; strong?: boolean }) {
  return (
    <p>
      {items.map((t) => (
        <span key={t} className={strong ? "tag tag-strong" : "tag"}>{t}</span>
      ))}
    </p>
  );
}

/** Emplacement d'image : à remplacer par <Image> quand les captures seront prêtes. */
export function Cover({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`grid place-items-center rounded-lg border border-dashed border-line bg-accent-soft font-display text-xl font-bold text-accent ${className}`}>
      {label}
    </div>
  );
}

export function TimelineCard({ title, org, period, badge, children }: {
  title: string; org: string; period: string; badge?: string; children: ReactNode;
}) {
  return (
    <article className="card mb-6 p-8">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span className="rounded-full bg-accent-soft px-3 py-0.5 text-xs text-muted">{period}</span>
        {badge && <span className="tag m-0!">{badge}</span>}
      </div>
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      <p className="mb-4 font-medium text-accent">{org}</p>
      {children}
    </article>
  );
}
