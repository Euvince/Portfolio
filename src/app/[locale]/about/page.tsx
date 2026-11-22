import { TagList, TimelineCard } from "@/components/ui";
import { education } from "@/content/education";
import { experience } from "@/content/experience";
import { getDictionary, pick, resolveLocale } from "@/lib/i18n";
import { periodText } from "@/lib/text";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);

  return (
    <>
      <section className="container-page section">
        <h1 className="h2 mb-7">{dict.aboutTitle}</h1>
        <p className="max-w-2xl leading-8">{dict.intro}</p>
        <h2 className="mb-3 mt-10 font-display text-lg font-semibold">{dict.interests}</h2>
        <p className="max-w-2xl leading-8 text-muted">{dict.interestsText}</p>
      </section>

      <section className="container-page section grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="h2 mb-7">{dict.education}</h2>
          {education.map((e) => (
            <TimelineCard key={e.school} title={pick(e.degree, locale)} org={`${e.school} · ${pick(e.location, locale)}`}
              period={e.period} badge={e.status === "ongoing" ? dict.statusOngoing : dict.statusDone}>
              <p className="mb-3 font-semibold">{dict.courses}</p>
              <TagList strong items={pick(e.courses, locale)} />
            </TimelineCard>
          ))}
        </div>
        <div>
          <h2 className="h2 mb-7">{dict.experience}</h2>
          {experience.map((e) => (
            <TimelineCard key={e.company} title={pick(e.role, locale)} period={periodText(e.period, locale)}
              org={e.location ? `${e.company} · ${pick(e.location, locale)}` : e.company}>
              {e.note && <p className="mb-3 text-muted">{pick(e.note, locale)}</p>}
              <ul className="mb-4 list-disc space-y-1.5 pl-5">{pick(e.highlights, locale).map((h) => <li key={h}>{h}</li>)}</ul>
              {e.stack && <TagList items={e.stack} />}
            </TimelineCard>
          ))}
        </div>
      </section>
    </>
  );
}
