import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectPager } from "@/components/ProjectPager";
import { buildSections } from "@/components/ProjectSections";
import { Cover, TagList } from "@/components/ui";
import { projects } from "@/content/projects";
import { getDictionary, isLocale, locales, pick } from "@/lib/i18n";
import { categoryLabels, getAdjacent, getProject } from "@/lib/projects";

type Params = Promise<{ locale: string; slug: string }>;

export const generateStaticParams = () => locales.flatMap((locale) => projects.map((p) => ({ locale, slug: p.slug })));

export async function generateMetadata({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const project = getProject(slug);
  return isLocale(locale) && project ? { title: pick(project.title, locale) } : {};
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!isLocale(locale) || !project) notFound();

  const dict = getDictionary(locale);
  const title = pick(project.title, locale);
  const labels = categoryLabels(dict);
  const sections = buildSections(project, locale, dict);
  const { prev, next } = getAdjacent(slug);

  return (
    <section className="container-page section">
      <Link href={`/${locale}/projects`} className="btn btn-soft">← {dict.backToProjects}</Link>
      <h1 className="mb-2 mt-6 font-display text-3xl font-bold md:text-4xl">
        {title}
        {project.inProgress && <span className="text-base font-normal text-muted"> ({dict.inProgress})</span>}
      </h1>
      <p className="mb-3 text-muted">{project.categories.map((c) => labels[c]).join(" · ")}, {project.year}</p>
      <TagList items={project.tags} />
      {project.repoUrl && <a className="btn mt-2" href={project.repoUrl} target="_blank" rel="noopener noreferrer">{dict.viewCode}</a>}
      <Cover label={title} className="my-10 aspect-[21/9]" />

      <div className="grid gap-10 lg:grid-cols-[1fr_200px]">
        <div>
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="mb-12 scroll-mt-24">
              <h2 className="h2 mb-5">{s.title}</h2>
              {s.body}
            </section>
          ))}
          <ProjectPager prev={prev} next={next} locale={locale} dict={dict} />
        </div>
        <nav className="sticky top-24 hidden flex-col gap-1.5 self-start border-l border-line pl-4 text-sm lg:flex">
          <b>{dict.toc}</b>
          {sections.map((s) => <a key={s.id} href={`#${s.id}`} className="text-muted hover:text-accent">{s.title}</a>)}
        </nav>
      </div>
    </section>
  );
}
