import type { Education } from "@/lib/types";

/* Contenu éditable. Les textes traduits sont des paires [français, anglais]. */
export const education: Education[] = [
  {
    school: "Université de Rennes (ISTIC)",
    degree: ["Master 1 MIAGE", "Master 1 MIAGE"],
    period: "2026 – 2027",
    location: ["Rennes", "Rennes"],
    status: "ongoing",
    courses: [
      [
        "Analyse et conception à objets",
        "Concurrence et coopération dans les systèmes et réseaux",
        "Bases de données décisionnelles et NoSQL",
        "Projet de développement logiciel",
        "Programmation mobile",
        "Systèmes d’information répartis",
        "Web sémantique",
        "Gestion de production",
      ],
      [
        "Object-oriented analysis and design",
        "Concurrency and cooperation in systems and networks",
        "Decision-support and NoSQL databases",
        "Software development project",
        "Mobile programming",
        "Distributed information systems",
        "Semantic web",
        "Production management",
      ],
    ],
  },
  {
    school: "ENEAM",
    degree: [
      "Licence en Informatique de Gestion, Analyse informatique et programmation",
      "Bachelor’s in Business Computing, Computer Analysis and Programming",
    ],
    period: "2021 – 2024",
    location: ["Bénin", "Benin"],
    status: "done",
    courses: [
      [
        "Algorithmique",
        "Structures de données",
        "Programmation orientée objet (Java, C++)",
        "Administration des bases de données (Oracle)",
        "Bases de données (Merise)",
        "Développement mobile (Flutter)",
        "Programmation web",
        "Systèmes d’exploitation",
        "Réseaux",
        "UML",
      ],
      [
        "Algorithms",
        "Data structures",
        "Object-oriented programming (Java, C++)",
        "Database administration (Oracle)",
        "Databases (Merise)",
        "Mobile development (Flutter)",
        "Web programming",
        "Operating systems",
        "Networks",
        "UML",
      ],
    ],
  },
];
