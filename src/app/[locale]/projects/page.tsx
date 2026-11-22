import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { projects } from "@/content/projects";
import { getDictionary, resolveLocale } from "@/lib/i18n";
import { categoryLabels, toPreview } from "@/lib/projects";

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  return (
    <section className="container-page section">
      <h1 className="h2 mb-8">{dict.projectsTitle}</h1>
      <ProjectsExplorer
        locale={locale}
        items={projects.map((p) => toPreview(p, locale))}
        labels={{ all: dict.filterAll, cards: dict.viewCards, list: dict.viewList, categories: categoryLabels(dict) }}
      />
    </section>
  );
}
