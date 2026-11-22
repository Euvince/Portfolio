import type { Experience } from "@/lib/types";

/* Contenu éditable. Les textes traduits sont des paires [français, anglais]. */
export const experience: Experience[] = [
  {
    company: "Wetillix",
    role: ["Développeur Full-Stack et Mobile", "Full-Stack and Mobile developer"],
    period: "10/2024 – 08/2026",
    location: ["États-Unis, à distance", "USA, remote"],
    note: [
      "Stagiaire (10/2024 – 04/2025), puis développeur dès 05/2025",
      "Intern (10/2024 – 04/2025), then developer from 05/2025",
    ],
    stack: [
      "Django",
      "Angular",
      "Ionic",
      "PostgreSQL",
      "Celery",
      "Redis",
      "Pusher",
      "Firebase",
      "Twilio",
      "Sentry",
    ],
    highlights: [
      [
        "Responsable principal des APIs REST d’une plateforme de prise de rendez-vous médicaux (Django, PostgreSQL, Celery, Redis).",
        "Suite de 3 applications mobiles (Patient, Driver, Manager) sur un backend unifié : commande d’ambulances urgentes et suivi des interventions en temps réel (Angular, Ionic, Pusher, Google Maps API, Firebase, Twilio, Sentry).",
        "Contribution au développement d’un SaaS de gestion de présence par reconnaissance faciale.",
        "Contribution au développement backend d’Exam-Hub, une application mobile d’apprentissage donnant accès aux sujets d’examens passés et aux ressources de révision.",
        "Participation au projet de Dossier Patient Informatisé (DPI) : APIs RESTful pour le traitement et le suivi des données médicales.",
        "Documentation OpenAPI / Swagger, revues de code, rédaction de tests unitaires, optimisation des bases de données, back-office.",
      ],
      [
        "Main developer of the REST APIs of a medical appointment platform (Django, PostgreSQL, Celery, Redis).",
        "Suite of 3 mobile apps (Patient, Driver, Manager) on a unified backend: ordering emergency ambulances and tracking interventions in real time (Angular, Ionic, Pusher, Google Maps API, Firebase, Twilio, Sentry).",
        "Contribution to a facial-recognition attendance SaaS.",
        "Contribution to the backend of Exam-Hub, a learning mobile app giving access to past exam papers and revision resources.",
        "Participation in the electronic patient record (DPI) project: RESTful APIs for processing and tracking medical data.",
        "OpenAPI / Swagger documentation, code reviews, unit tests, database optimization, back-office.",
      ],
    ],
    outcome: [
      "autonomie en équipe distante, communication avec les équipes front et mobile, esprit d’équipe, prise de responsabilités.",
      "autonomy in a remote team, communication with front-end and mobile teams, team spirit, taking responsibility.",
    ],
  },
  {
    company: "Nextmux S.A.S",
    role: ["Stagiaire développeur back-end", "Back-end developer intern"],
    period: "03/2024 – 08/2024",
    location: ["Bénin", "Benin"],
    stack: ["Laravel", "Next.js"],
    highlights: [
      [
        "Modélisation de systèmes d’information, APIs RESTful, application web de gestion de bibliothèque (Next.js, Laravel).",
        "Formation d’apprenants à PHP et Laravel.",
      ],
      [
        "Information-system modelling, RESTful APIs, library management web application (Next.js, Laravel).",
        "Training learners in PHP and Laravel.",
      ],
    ],
    outcome: [
      "pédagogie et clarté d’expression, sens de l’analyse des besoins.",
      "teaching skills and clear expression, requirements analysis.",
    ],
  },
  {
    company: "Ministère de l’Intérieur et de la Sécurité Publique",
    role: [
      "Stagiaire développeur web et maintenance informatique",
      "Web developer and IT maintenance intern",
    ],
    period: "06/2023 – 08/2023",
    location: ["Bénin", "Benin"],
    stack: ["Laravel", "Livewire"],
    highlights: [
      [
        "Application web de gestion d’archives (Laravel, Livewire) et administration de la base de données relationnelle pour l’archivage sécurisé.",
        "Participation à la sécurisation du réseau d’une annexe.",
      ],
      [
        "Archive management web application (Laravel, Livewire) and relational database administration for secure archiving.",
        "Helped secure the network of an annex.",
      ],
    ],
    outcome: [
      "rigueur et confidentialité (archives sensibles), sens du service (assistance technique aux utilisateurs).",
      "rigor and confidentiality (sensitive archives), service mindset (technical user support).",
    ],
  },
  {
    company: "World Consulting Group",
    role: ["Stagiaire développeur web", "Web developer intern"],
    period: "07/2022 – 08/2022",
    location: ["Bénin", "Benin"],
    stack: ["Node.js", "PHP", "JavaScript", "CSS"],
    highlights: [
      [
        "Mise en place d’une application web de facturation.",
        "Premiers pas en CSS, JavaScript, Node.js et PHP.",
      ],
      [
        "Built an invoicing web application.",
        "First steps in CSS, JavaScript, Node.js and PHP.",
      ],
    ],
    showOnCv: false,
  },
  {
    company: "Freelance",
    role: ["Développeur freelance", "Freelance developer"],
    period: ["2022 – aujourd’hui", "2022 – present"],
    stack: ["Angular", "Nuxt", "FastAPI", "Symfony", "Laravel"],
    highlights: [
      [
        "Micro-services de scraping et consolidation de données, APIs (Angular, Nuxt, FastAPI, Symfony, Laravel).",
      ],
      [
        "Scraping and data-consolidation micro-services, APIs (Angular, Nuxt, FastAPI, Symfony, Laravel).",
      ],
    ],
  },
];
