import { domains } from "@/content/domains";
import { pick, type Locale } from "@/lib/i18n";
import { TagList } from "./ui";

/** Carte verticale reliée, avec un point qui descend (animation `travel`). */
export function DomainRail({ locale }: { locale: Locale }) {
  return (
    <div className="card relative px-5 py-3">
      <span className="absolute left-[38px] top-[44px] size-2 animate-travel rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
      {domains.map((d, i) => (
        <div key={d.code} className="relative flex items-center gap-4 py-3.5">
          {i > 0 && <span className="absolute -top-3.5 left-[21px] h-7 border-l border-line" />}
          <span className="relative z-10 grid size-11 place-items-center rounded-xl border border-line bg-surface font-display text-xs font-semibold text-accent">{d.code}</span>
          <b>{pick(d.title, locale)}</b>
        </div>
      ))}
    </div>
  );
}

/** Cartes de domaines : les détails apparaissent au survol ou au focus (toujours visibles au tactile). */
export function DomainGrid({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {domains.map((d) => (
        <article key={d.code} tabIndex={0} className="group card p-7 transition-colors hover:border-accent focus-visible:border-accent">
          <h3 className="mb-2 font-display text-lg font-semibold">{pick(d.title, locale)}</h3>
          <p className="text-muted">{pick(d.summary, locale)}</p>
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] [@media(hover:none)]:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <ul className="mt-4 list-disc space-y-1.5 pl-5">
                {pick(d.highlights, locale).map((h) => <li key={h}>{h}</li>)}
              </ul>
            </div>
          </div>
          <div className="mt-4"><TagList items={d.tags} /></div>
        </article>
      ))}
    </div>
  );
}
