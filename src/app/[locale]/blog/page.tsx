import { getDictionary, resolveLocale } from "@/lib/i18n";

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const dict = getDictionary(await resolveLocale(params));
  return (
    <section className="container-page section">
      <h1 className="h2 mb-8">{dict.navBlog}</h1>
      <div className="card px-7 py-14 text-center">
        <h2 className="mb-2 font-display text-xl font-semibold">{dict.blogSoon}</h2>
        <p className="text-muted">{dict.blogSoonText}</p>
      </div>
    </section>
  );
}
