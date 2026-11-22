import Link from "next/link";
import { DomainGrid, DomainRail } from "@/components/Domains";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { getDictionary, resolveLocale } from "@/lib/i18n";
import { toPreview } from "@/lib/projects";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  const recent = projects.slice(0, 3).map((p) => toPreview(p, locale));

  return (
    <>
      <section className="container-page grid items-center gap-12 pb-12 pt-16 md:grid-cols-[1.2fr_1fr] md:pt-24">
        <div>
          <p className="mb-5 font-display text-lg font-semibold text-accent">{site.name}</p>
          <h1 className="mb-6 max-w-[20em] font-display text-3xl font-bold leading-snug tracking-tight md:text-[2.4rem]">{dict.heroTitle}</h1>
          <p className="text-muted">{dict.heroRole}</p>
          <p className="mt-5 max-w-xl leading-8">{dict.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link className="btn btn-primary" href={`/${locale}/projects`}>{dict.ctaProjects}</Link>
            <Link className="btn" href={`/${locale}/cv`}>{dict.ctaCv}</Link>
          </div>
        </div>
        <DomainRail locale={locale} />
      </section>

      <section className="container-page section">
        <h2 className="h2 mb-7">{dict.domainsTitle}</h2>
        <DomainGrid locale={locale} />
      </section>

      <section className="container-page section">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
          <h2 className="h2">{dict.recentProjects}</h2>
          <Link className="btn" href={`/${locale}/projects`}>{dict.allProjects}</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recent.map((item) => <ProjectCard key={item.slug} item={item} locale={locale} />)}
        </div>
      </section>
    </>
  );
}
