import { ContactForm } from "@/components/ContactForm";
import { socials } from "@/content/socials";
import { getDictionary, resolveLocale } from "@/lib/i18n";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const dict = getDictionary(await resolveLocale(params));
  return (
    <section className="container-page section">
      <h1 className="h2 mb-3">{dict.contactTitle}</h1>
      <p className="mb-8 text-muted">{dict.contactIntro}</p>
      <div className="grid gap-6 md:grid-cols-2">
        <ContactForm dict={dict} />
        <div className="space-y-4">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="card block p-6 font-semibold transition-colors hover:border-accent">{s.label}</a>
          ))}
        </div>
      </div>
    </section>
  );
}
