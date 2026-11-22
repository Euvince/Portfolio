import type { ReactNode } from "react";
import type { Dictionary, Locale } from "@/lib/i18n";
import { pick } from "@/lib/i18n";
import type { Project } from "@/lib/types";
import { BulletList, CodeBlock, Paragraphs, StackBlock } from "./blocks";

export interface DetailSection { id: string; title: string; body: ReactNode }

/**
 * Construit les sections d'une page projet. Une section sans donnée n'est pas affichée :
 * pour en ajouter une, renseigner le champ correspondant dans src/content/projects.ts.
 */
export function buildSections(p: Project, locale: Locale, d: Dictionary): DetailSection[] {
  const { frontend, backend } = p.stack;
  const sections: DetailSection[] = [{ id: "context", title: d.secContext, body: <Paragraphs items={pick(p.context, locale)} /> }];

  if (frontend && backend) {
    const names = (items: typeof frontend) => items.map((i) => i.name).join(", ");
    sections.push({
      id: "architecture", title: d.secArchitecture,
      body: (
        <div className="grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr]">
          <div className="card p-5"><b>{d.labelFront}</b><p className="mt-1 text-muted">{names(frontend)}</p></div>
          <span className="text-center text-accent">⇄</span>
          <div className="card p-5"><b>{d.labelBack}</b><p className="mt-1 text-muted">{names(backend)}</p></div>
        </div>
      ),
    });
  }
  if (p.features) sections.push({ id: "features", title: d.secFeatures, body: <BulletList items={pick(p.features, locale)} /> });
  if (frontend) sections.push({ id: "stack-front", title: d.secStackFront, body: <StackBlock items={frontend} locale={locale} /> });
  if (backend) sections.push({ id: "stack-back", title: d.secStackBack, body: <StackBlock items={backend} locale={locale} /> });
  if (p.dataModel) sections.push({ id: "data-model", title: d.secDataModel, body: <StackBlock items={p.dataModel} locale={locale} /> });
  if (p.structure.frontend) sections.push({ id: "structure-front", title: d.secStructureFront, body: <CodeBlock code={p.structure.frontend} /> });
  if (p.structure.backend) sections.push({ id: "structure-back", title: d.secStructureBack, body: <CodeBlock code={p.structure.backend} /> });
  if (p.learned) sections.push({ id: "learned", title: d.secLearned, body: <Paragraphs items={pick(p.learned, locale)} /> });
  return sections;
}
