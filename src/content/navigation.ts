import type { Dictionary } from "@/lib/i18n";

/** Ordre et libellés de la navbar. `path` est relatif à /[locale]. */
export const navigation: { path: string; label: keyof Dictionary }[] = [
  { path: "", label: "navHome" },
  { path: "/projects", label: "navProjects" },
  { path: "/blog", label: "navBlog" },
  { path: "/about", label: "navAbout" },
  { path: "/cv", label: "navCv" },
  { path: "/contact", label: "navContact" },
];
