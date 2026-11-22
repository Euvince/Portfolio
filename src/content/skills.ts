import type { SkillGroup } from "@/lib/types";

/* Contenu éditable. Les textes traduits sont des paires [français, anglais]. */
export const skills: SkillGroup[] = [
  {
    label: ["Langages et frameworks", "Languages and frameworks"],
    items: [
      "Python",
      "Java",
      "PHP",
      "JavaScript",
      "TypeScript",
      "Dart",
      "Django",
      "Laravel",
      "Symfony",
      "Angular",
      "Flutter",
      "Tailwind CSS",
    ],
  },
  {
    label: ["Bases de données", "Databases"],
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "Supabase"],
  },
  {
    label: ["Data et analyse", "Data and analysis"],
    items: ["Python (Pandas, NumPy)", "SQL", "Excel"],
  },
  {
    label: ["IA générative et LLM", "Generative AI and LLMs"],
    items: ["Claude", "LLM", "OpenAI SDK", "Prompt engineering"],
  },
  {
    label: ["DevOps, outils et méthodes", "DevOps, tools and methods"],
    items: [
      "Git / GitHub / GitLab",
      "GitHub Actions",
      "Docker",
      "Sentry",
      "Swagger / OpenAPI",
      "Insomnia",
      "Postman",
      "Jira",
      "Notion",
      "Excel",
      "VS Code",
      "Android Studio",
      "IntelliJ",
      "PyCharm",
      "UML",
      "Merise",
      "Agile",
    ],
  },
  {
    label: ["Notions", "Foundations"],
    items: [
      "Spring Boot",
      "FastAPI",
      "Node.js / Express",
      "Next.js",
      "Vue.js",
      "Nuxt",
      "Ionic",
      "Kotlin",
    ],
  },
];
