import { pick, type Locale } from "@/lib/i18n";
import type { StackItem } from "@/lib/types";
import { TagList } from "./ui";

export const Paragraphs = ({ items }: { items: readonly string[] }) => (
  <>{items.map((t) => <p key={t} className="mb-3 leading-7">{t}</p>)}</>
);

export const BulletList = ({ items }: { items: readonly string[] }) => (
  <ul className="list-disc space-y-1.5 pl-5">{items.map((t) => <li key={t}>{t}</li>)}</ul>
);

export const CodeBlock = ({ code }: { code: string }) => (
  <pre className="overflow-x-auto rounded-xl border border-line bg-surface p-4 font-mono text-sm leading-7">{code}</pre>
);

/** Tableau technologie / rôle, ou simples tags si aucune description. */
export function StackBlock({ items, locale }: { items: StackItem[]; locale: Locale }) {
  if (!items.some((i) => i.description)) return <TagList items={items.map((i) => i.name)} />;
  return (
    <table className="w-full text-left">
      <tbody>
        {items.map((i) => (
          <tr key={i.name} className="border-b border-line align-top">
            <td className="whitespace-nowrap py-2.5 pr-4 font-semibold">{i.name}</td>
            <td className="py-2.5 text-muted">{i.description && pick(i.description, locale)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
