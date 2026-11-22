import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { ProjectPreview } from "@/lib/projects";
import { Cover, TagList } from "./ui";

export function ProjectCard({ item, locale }: { item: ProjectPreview; locale: Locale }) {
  return (
    <Link href={`/${locale}/projects/${item.slug}`} className="card block p-7 transition-colors hover:border-accent">
      <Cover label={item.title} className="mb-5 aspect-video" />
      <h3 className="mb-2 font-display text-lg font-semibold">{item.title}</h3>
      <p className="text-muted">{item.summary}</p>
      <div className="mt-4"><TagList items={item.tags} /></div>
    </Link>
  );
}
