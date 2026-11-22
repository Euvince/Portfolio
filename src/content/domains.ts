import type { Domain } from "@/lib/types";

/* Contenu éditable. Les textes traduits sont des paires [français, anglais]. */
export const domains: Domain[] = [
  {
    code: "API",
    title: ["Backend et APIs", "Backend and APIs"],
    summary: [
      "Des API fiables, documentées et prêtes pour le mobile et le web.",
      "Reliable, documented APIs ready for mobile and web.",
    ],
    highlights: [
      [
        "API REST documentées avec OpenAPI et Swagger",
        "Tâches asynchrones et planifiées",
        "Optimisation des bases de données",
      ],
      [
        "REST APIs documented with OpenAPI and Swagger",
        "Async and scheduled tasks",
        "Database optimization",
      ],
    ],
    tags: ["Django", "Laravel", "FastAPI", "Symfony"],
  },
  {
    code: "APP",
    title: ["Applications mobiles", "Mobile apps"],
    summary: [
      "Du prototype à la publication, en multiplateforme ou en natif.",
      "From prototype to release, cross-platform or native.",
    ],
    highlights: [
      [
        "Flutter et Ionic pour Android et iOS",
        "Android natif en Kotlin (MVVM, Room)",
        "Temps réel, géolocalisation, notifications",
      ],
      [
        "Flutter and Ionic for Android and iOS",
        "Native Android in Kotlin (MVVM, Room)",
        "Real time, geolocation, notifications",
      ],
    ],
    tags: ["Flutter", "Ionic", "Kotlin"],
  },
  {
    code: "UI",
    title: ["Frontend", "Frontend"],
    summary: [
      "Des interfaces claires, responsives et branchées sur vos API.",
      "Clear, responsive interfaces wired to your APIs.",
    ],
    highlights: [
      [
        "Angular, Next.js et Nuxt",
        "Mise en page responsive avec Tailwind CSS",
        "Intégration de maquettes et d’API REST",
      ],
      [
        "Angular, Next.js and Nuxt",
        "Responsive layouts with Tailwind CSS",
        "Integration of mockups and REST APIs",
      ],
    ],
    tags: ["Angular", "Next.js", "Tailwind"],
  },
  {
    code: "OPS",
    title: ["DevOps", "DevOps"],
    summary: [
      "Automatiser, conteneuriser et surveiller les applications.",
      "Automate, containerize and monitor applications.",
    ],
    highlights: [
      [
        "Intégration continue avec GitHub Actions",
        "Conteneurs Docker",
        "Suivi des erreurs avec Sentry",
      ],
      [
        "Continuous integration with GitHub Actions",
        "Docker containers",
        "Error tracking with Sentry",
      ],
    ],
    tags: ["Docker", "GitHub Actions", "Sentry"],
  },
  {
    code: "DATA",
    title: ["Data", "Data"],
    summary: [
      "Analyser, interroger et exploiter les données, y compris avec l’IA générative.",
      "Analyze, query and use data, including with generative AI.",
    ],
    highlights: [
      [
        "Analyse avec Python, Pandas et NumPy",
        "SQL, PostgreSQL et MongoDB",
        "LLM : Claude, OpenAI SDK, prompt engineering",
      ],
      [
        "Analysis with Python, Pandas and NumPy",
        "SQL, PostgreSQL and MongoDB",
        "LLMs: Claude, OpenAI SDK, prompt engineering",
      ],
    ],
    tags: ["Python", "Pandas", "SQL"],
  },
];
