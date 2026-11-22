import { TagList } from "@/components/ui";
import { education } from "@/content/education";
import { experience } from "@/content/experience";
import { site } from "@/content/site";
import { skills } from "@/content/skills";
import { socials } from "@/content/socials";
import { getDictionary, pick, resolveLocale } from "@/lib/i18n";
import { periodText } from "@/lib/text";

export default async function CvPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);

  return (
    <section className="container-page section grid gap-10 md:grid-cols-[260px_1fr]">
      <aside className="self-start md:sticky md:top-24">
        <div className="grid size-28 place-items-center rounded-full border-2 border-line bg-accent-soft font-display text-3xl font-bold text-accent">{site.initials}</div>
        <h1 className="mb-1 mt-4 font-display text-2xl font-bold">{site.fullName}</h1>
        <p className="text-muted">{dict.heroRole}</p>
        <p className="mt-2 text-muted">{dict.mobility}</p>
        <div className="my-5 flex flex-wrap gap-2">
          {socials.map((s) => <a key={s.label} className="btn" href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>)}
        </div>
        <a className="btn btn-primary" href={site.cvPdf} download>{dict.downloadPdf}</a>
      </aside>

      <div>
        <h2 className="h2 mb-5">{dict.profile}</h2>
        <p className="mb-10 leading-8">{dict.intro}</p>

        <h2 className="h2 mb-5">{dict.experience}</h2>
        <div className="timeline mb-10">
          {experience.filter((e) => e.showOnCv !== false).map((e) => (
            <div key={e.company} className="timeline-item">
              <b>{pick(e.role, locale)}</b>
              <p className="text-muted">{e.company}{e.location && ` (${pick(e.location, locale)})`} · {periodText(e.period, locale)}</p>
              {e.note && <p className="text-muted">{pick(e.note, locale)}</p>}
              <ul className="my-2 list-disc space-y-1 pl-5">{pick(e.highlights, locale).map((h) => <li key={h}>{h}</li>)}</ul>
              {e.outcome && <p><b>{dict.outcome} :</b> {pick(e.outcome, locale)}</p>}
            </div>
          ))}
        </div>

        <h2 className="h2 mb-5">{dict.education}</h2>
        <div className="timeline mb-10">
          {education.map((e) => (
            <div key={e.school} className="timeline-item">
              <b>{pick(e.degree, locale)}</b>
              <p className="text-muted">{e.school} · {e.period}</p>
            </div>
          ))}
        </div>

        <h2 className="h2 mb-5">{dict.skills}</h2>
        {skills.map((g) => (
          <div key={g.items[0]} className="mb-3"><b>{pick(g.label, locale)}</b><TagList items={g.items} /></div>
        ))}
        <p className="mb-10 text-muted">{dict.languages}</p>

        <h2 className="h2 mb-5">{dict.interests}</h2>
        <p className="text-muted">{dict.interestsText}</p>
      </div>
    </section>
  );
}
