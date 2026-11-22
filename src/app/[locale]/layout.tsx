import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { notFound } from "next/navigation";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/content/site";
import { getDictionary, isLocale, locales } from "@/lib/i18n";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

type Props = { children: ReactNode; params: Promise<{ locale: string }> };

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export async function generateMetadata({ params }: Pick<Props, "params">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: { default: site.name, template: `%s · ${site.name}` }, description: getDictionary(locale).heroRole };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={locale} suppressHydrationWarning className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans text-fg antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header locale={locale} dict={getDictionary(locale)} />
          <main>{children}</main>
          <Footer dict={getDictionary(locale)} />
        </ThemeProvider>
      </body>
    </html>
  );
}
