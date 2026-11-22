import type { Dictionary } from "@/lib/i18n";

export function Footer({ dict }: { dict: Dictionary }) {
  return <footer className="px-5 py-10 text-center text-sm text-muted">© {new Date().getFullYear()} · {dict.footer}</footer>;
}
